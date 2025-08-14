import express from 'express';
import 'dotenv/config';
const app = express();

app.use((req,res,next) => {
    res.send(process.env.HELLO);
})

app.listen(3030,"0.0.0.0");