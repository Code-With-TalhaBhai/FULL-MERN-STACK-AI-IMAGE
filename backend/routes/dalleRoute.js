import * as dotenv from 'dotenv';
import { OpenAIApi, Configuration } from 'openai';
import express from 'express';

dotenv.config();
// const app = express();
// const router = app.router;
// 2nd way

const router = express.Router();


const configuration = new Configuration({
    organization: 'org-o3gWJH842FiGWQ7i8ZgkA76W',
    apiKey: process.env.OPANAI_SECRET_KEY
})
const openai = new OpenAIApi(configuration);


router.route('/').get((req,res)=>{
    res.send('Hello from TAlha Dall');
})


router.route('/').post(async(req,res)=>{
    try {
        const {prompt} = req.body;      
        const response = await openai.createImage({
            prompt,
            n:1,
            size: '1024x1024',
            response_format: 'b64_json'
        });

        const image = await response.data.data[0].b64_json;
        res.status(200).json({image:image});

    } catch (error) {
        console.log("OpenAi is not sending images",error?.response?.data?.error);
        res.status(500).send(error);
    }
})

export default router;