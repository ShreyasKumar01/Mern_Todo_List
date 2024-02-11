import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const Connection = () =>
{
    const uri=`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.jagyh6z.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(uri, {useNewUrlParser:true})

    mongoose.connection.on('connected',()=>{
        console.log('database connected');
    });

    mongoose.connection.on('disconnected',()=>{
        console.log('database disconnected');
    });

    mongoose.connection.on('error',()=>{
        console.log('error occured');
    });

}

export default Connection;