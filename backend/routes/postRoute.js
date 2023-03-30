import express from 'express'
import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';
// import Post from '../mongodb/models/post';
// import { S3Client,ListObjectsV2Command } from "@aws-sdk/client-s3"
import postSchema from '../mongodb/models/post.js';


dotenv.config();
// async function connectS3(){
//     // For AWS
//         // const s3 = new S3Client({
//         //     credentials:{
//         //         accessKeyId: process.env.AWS_ACCESS_KEY,
//         //         secretAccessKey: process.env.AWS_SECRET_KEY,
//         //     },
//         //     region: 'us-east-1'
//         // });


//         // var params = {
//         //     // Bucket: "bucketforimg",
//         //     Bucket: "staticwebsite02stack-websitebucket75c24d94-ma000oyhlgid",
//         //     Prefix: 'images'
//         // };

//         // const command = new ListObjectsV2Command(params);
//         // const response = await s3.send(command);
//         // console.log(response.Contents);

// }

// connectS3();

const router = express.Router();


router.route('/').get(async(req,res)=>{
    const data = await postSchema.find();
    res.status(200).json({data});
})


router.route('/').post(async(req,res)=>{
    const {name,prompt,photo} = req.body;

    try {
        cloudinary.config({
            cloud_name: "dl42078ck",
            api_key: "712214295715294",
            api_secret: "0aHlcgNkUj9GzdLtkYodEsUJWQY"
          });
    
        const photo_data = await cloudinary.uploader.upload(photo);    
        
        const response = await postSchema.create({name,prompt,photo: photo_data.secure_url});
        res.status(200).json({data:response});
    }

    catch (error) {
        res.status(500).send('This is mongo and cloudinary error',error);
    }

})



export default router;