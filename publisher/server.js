import express from 'express'
import cors from 'cors';
import path from 'path'
import serverRoutes from './routes.js'
import colors from 'colors'


const app = express()

const __dirname = path.resolve();
// Set static path

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.urlencoded({limit: '50mb', extended: true }));
app.use(express.json({limit: '50mb'}));
app.use(cors());

app.use('/', serverRoutes)

const PORT = 8000

app.listen(
    PORT, 
    console.log(`server is running in development mode on port ${PORT}`.yellow.bold)
)