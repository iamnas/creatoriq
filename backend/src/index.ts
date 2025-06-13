
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {

    res.json({
        message: 'Hello from CreatorIQ'
    })
})


app.listen(PORT,()=>{
    console.log(`Server is running http://localhost:${PORT}`);
})

