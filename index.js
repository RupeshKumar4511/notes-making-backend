import app from './app.js';
import connection from './config/db.js';
import {config} from 'dotenv';
config()

const PORT = process.env.PORT || 3000;


app.listen(PORT, '0.0.0.0', ()=>{
    console.log(`Server is listening on port ${PORT}`)
})