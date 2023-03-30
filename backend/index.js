import * as dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import connectToDb from './mongodb/mongoose.js';
import postRoute from './routes/postRoute.js';
import dalleRoute from './routes/dalleRoute.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use('/api/v1/post',postRoute);
app.use('/api/v1/dalle',dalleRoute);


app.get('/',(req,res)=>{
    res.send('Once again we send lets do it lets make history')
})

async function startServer(){
try {
    await connectToDb(process.env.MONGODB_URI);
    app.listen(8080,()=>{
        console.log('App is runnig powerfully');
    })   
} catch (error) {
    console.log('Server is not starting. Some error',error);
    }
}

startServer();