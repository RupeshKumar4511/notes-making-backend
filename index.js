import app from './app.js';
import connection from './config/db.js';
import {config} from 'dotenv';
config()

const PORT = process.env.PORT;

if (!PORT) {
  throw new Error("PORT is not defined by Railway")
}

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})