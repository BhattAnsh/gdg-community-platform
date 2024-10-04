import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import blogRouter from './routes/blog.route.js';

const app = express();

dotenv.config();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('This server is live');
});
app.use('/api/v1/user', userRouter);
app.use('/api/v1/blog', blogRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});