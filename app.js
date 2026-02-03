import express from 'express'
import bodyParser from 'body-parser'
import notesRoutes from './routes/notes.route.js' 

const app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api/v1',notesRoutes)

export default app;