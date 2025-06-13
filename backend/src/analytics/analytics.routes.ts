
import { Router } from 'express';
import prisma from '../utils/prisma';


const analyticsRouter = Router();

analyticsRouter.get('/', async (req, res) => {
    try {

        const analytics = await prisma.analytics.findFirst({
            orderBy: { createdAt: 'desc' }
        });

        if (!analytics) {
            res.status(404).json({ message: 'Analytics not found' });
            return;
        }

        res.json({
            followers: analytics.followerData,
            engagement: analytics.engagement,
            bestPostTime: analytics.bestPostTime,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to fetch analytics' });
    }
});

export default analyticsRouter;
