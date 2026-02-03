import mongoose from 'mongoose'

const connection = await mongoose.connect('mongodb://localhost:27017/Assignment').then(()=>{
    console.log("Database Connected Successfully")
}).catch((err)=>console.log(err))

export default connection;