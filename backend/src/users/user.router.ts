
import { Router } from 'express';
import prisma from '../utils/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { authenticate } from '../auth/auth.middleware';

const userRouter = Router();



userRouter.get('/me', authenticate, async (req: any, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.userId },
    select: { id: true, email: true, name: true, createdAt: true },
  });

  res.json(user);
});

userRouter.post('/signup', async (req, res) => {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
        res.status(400).json({ message: 'Missing fields' });
        return;
    }

    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
        res.status(500).json({ message: 'JWT_SECRET is not set' });
        return;
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
        res.status(400).json({ message: 'User already exists' });
        return;
    }

    const salt = await bcrypt.genSalt(10);



    const hashed = await bcrypt.hash(password, salt);
    const user = await prisma.user.create({
        data: { email, password: hashed, name,salt },
    });

    if (!user) {
        res.status(500).json({ message: 'Error creating user' });
        return;
    }



    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' });

    res.status(201).json({
        message: 'User created', token, user: {
            userId: user.id,
            email: user.email,
            name: user.name
        }
    });
});

userRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: 'Missing fields' });
        return;
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        res.status(400).json({ message: 'Invalid credentials' });
        return;
    }

    const match = await bcrypt.compare(password, user.password);
    
    if (!match) { res.status(401).json({ message: 'Invalid credentials' }); return; }

    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
        throw new Error('JWT_SECRET is not set');
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' });
    res.json({
        token, user: {
            userId: user.id,
            email: user.email,
            name: user.name
        }
    });
});


export default userRouter;



