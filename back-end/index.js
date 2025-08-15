// 环境变量
import 'dotenv/config';
// Web 应用框架
import express from 'express';
// CORS 跨域请求
import cors from 'cors';

// 环境变量
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;
// 
const app = express();

app.use(cors());

app.use((req, res, next) => {
    const resData = {
        msg: "Hello World!!!",
        req: req.body
    }
    res.json(resData);
});

app.listen(port, hostname);