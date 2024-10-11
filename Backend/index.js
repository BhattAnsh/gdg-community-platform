import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import blogRouter from './routes/blog.route.js';
import { connectDb } from './config/database.js';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'x-auth-token']
}));



app.use(express.json());

dotenv.config();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('This server is live');
});
app.use('/api/v1/user', userRouter);
app.use('/api/v1/blog', blogRouter);

app.listen(port, async() => {
    await connectDb().then( () =>{
        console.log("database connected")
    })
    console.log(`Server is running on http://localhost:${port}`);
});