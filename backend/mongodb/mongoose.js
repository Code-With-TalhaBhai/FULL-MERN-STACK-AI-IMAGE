import mongoose from "mongoose";



const connectToDb = async(uri)=>{
    //For Search
    mongoose.set('strictQuery',true);
    return mongoose.connect(uri).
    then(()=>{
    console.log('MongoDb successfully connected');
}).catch(err=>console.log('MongoDb Connection has error',err));
}


export default connectToDb;