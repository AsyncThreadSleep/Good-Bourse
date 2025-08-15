// 环境变量
import 'dotenv/config';
// Web 应用框架
import express from 'express';

const app = express();

app.use((req,res,next) => {
    res.send(process.env.HELLO);
})

app.listen(3030,"0.0.0.0");