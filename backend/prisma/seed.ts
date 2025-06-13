import prisma from "../src/utils/prisma";



async function main() {
    await prisma.analytics.create({
        data: {
            followerData: [1200, 1250, 1280, 1295, 1330, 1360, 1400],
            engagement: [
                { post: 1, likes: 320, comments: 25 },
                { post: 2, likes: 400, comments: 40 },
                { post: 3, likes: 290, comments: 10 },
                { post: 4, likes: 350, comments: 20 },
                { post: 5, likes: 380, comments: 30 }
            ],
            bestPostTime: 'Wednesday 7 PM',
        },
    });

    console.log('Seeding complete!');
}

main()
    .catch((e) => {
        console.error(e);
        // process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
