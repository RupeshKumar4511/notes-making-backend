import mongoose from 'mongoose'
import {config} from 'dotenv'
config();

const connection = await mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Database Connected Successfully")
}).catch((err)=>console.log(err))

export default connection;