
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not set');
}

interface AuthRequest extends Request {
    user?: { userId: string };
}

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization || req.headers.Authorization ;
    if (!authHeader) {
        res.status(401).json({ message: 'Missing token' });
        return;
    }

    const headerValue = Array.isArray(authHeader) ? authHeader[0] : authHeader;
    const token = headerValue.split(' ')[1];
    try {
        const payload = jwt.verify(token, JWT_SECRET) as { userId: string };
        req.user = { userId: payload.userId };
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid or expired token' });
        return;
    }
};
