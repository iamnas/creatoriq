
import express from 'express';
import cors from 'cors';
import userRouter from './users/user.router';
import dotenv from 'dotenv';
import ideaRouter from './idea/idea.routes';
import { authenticate } from './auth/auth.middleware';
import analyticsRouter from './analytics/analytics.routes';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {

    res.json({
        message: 'Hello from CreatorIQ'
    })
})

app.use('/api/v1/user', userRouter);
app.use('/api/v1/idea',authenticate, ideaRouter);
app.use('/api/v1/analytics',authenticate, analyticsRouter);



app.listen(PORT,()=>{
    console.log(`Server is running http://localhost:${PORT}`);
})

