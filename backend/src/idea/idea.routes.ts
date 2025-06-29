
import { Router } from 'express';
import { OpenAI } from 'openai';
import { authenticate } from '../auth/auth.middleware';
import prisma from '../utils/prisma';
import { getOpenAI } from '../utils/openai';


const ideaRouter = Router();


ideaRouter.post('/generate-idea', async (req: any, res) => {
    const { topic, niche } = req.body;

    if (!topic || !niche) { res.status(400).json({ message: 'Missing topic or niche' }); return; }



    try {
        const idea = await prisma.idea.create({
            data: {
                userId: req.user.userId,
                topic,
                niche,
                reelIdea: '',
                caption: '',
                hook: '',
                hashtags: [],
                isFetched: false,
                isFailed: false
            }
        });

        res.json({
            data: {
                id: idea.id,
                isFetched: false,
                isFailed: false,
                idea: {}
            }
        });

        // Generate idea in background
        (async () => {
            const openai = getOpenAI();



            const prompt = `You are a content strategist. Suggest one trending Instagram reel 
                    idea for a creator in the ${niche} niche based on the topic "${topic}".
                Please respond in **JSON format** with the following fields:
                {
                "reelIdea": "Full idea description with concept",
                "hook": "Opening hook to grab attention",
                "caption": "Instagram caption text",
                "hashtags": ["#tag1", "#tag2", "#tag3", "#tag4", "#tag5"]
                }`;
            try {

                const completion = await openai.chat.completions.create({
                    messages: [{ role: 'user', content: prompt }],
                    model: process.env.OPENAI_MODEL || 'gpt-4',
                    response_format: { type: 'json_object' },
                });


                const content = completion.choices[0].message.content;

                if (!content) {
                    res.status(400).json({ message: 'Failed to generate content idea' });
                    return;
                }

                const { reelIdea, caption, hook, hashtags } = JSON.parse(content);

                await prisma.idea.update({
                    where: { id: idea.id },
                    data: {
                        reelIdea,
                        caption,
                        hook,
                        hashtags,
                        isFetched: true,
                        isFailed: false
                    }
                });
            } catch (err) {
                console.error('OpenAI generation failed:', err);
                await prisma.idea.update({
                    where: { id: idea.id },
                    data: {
                        isFetched: true,
                        isFailed: true
                    }
                });
            }
        })();

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to generate content idea' });
    }
});



// GET /api/v1/idea?id=some-id => fetch single idea
// GET /api/v1/idea => fetch all ideas

ideaRouter.get('/', authenticate, async (req: any, res) => {
    try {
        const { id } = req.query;

        if (id) {
            const idea = await prisma.idea.findFirst({
                where: {
                    id: String(id),
                    userId: req.user.userId
                }
            });

            if (!idea) {
                res.status(404).json({ message: 'Idea not found' }); return;
            }

            res.json({ data: idea });
            return;
        }

        const ideas = await prisma.idea.findMany({
            where: { userId: req.user.userId },
            orderBy: { createdAt: 'desc' },
        });

        res.json({ data: ideas });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to fetch idea(s)' });
    }
});





// ideaRouter.get('/:id', authenticate, async (req: any, res) => {
//     try {
//         const idea = await prisma.idea.findUnique({
//             where: { id: req.params.id, userId: req.user.userId }
//         });

//         if (!idea) { res.status(404).json({ message: 'Idea not found' }); return; }
//         res.json({ data: idea });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Failed to fetch idea' });
//     }
// });

// ideaRouter.get('/', async (req: any, res) => {
//     try {
//         const ideas = await prisma.idea.findMany({
//             where: { userId: req.user.userId },
//             orderBy: { createdAt: 'desc' },
//         });

//         res.json({ data: ideas });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Failed to fetch content ideas' });
//     }
// });


export default ideaRouter;
