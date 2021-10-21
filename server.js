import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';
import webpush from 'web-push'
import path from 'path'
import topicRoutes from './routes.js'
import colors from 'colors'



dotenv.config()

const app = express()

const __dirname = path.resolve();
// Set static path
app.use(express.static(path.join(__dirname, 'client')));
app.use(cors());
app.use(express.urlencoded({limit: '50mb', extended: true }));
app.use(express.json({limit: '50mb'}));

app.use('/api', topicRoutes)

const publicVapidKey = process.env.PUBLICVAPIDKEY
const privateVapidKey = process.env.PRIVATEVAPIDKEY

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);



const PORT = process.env.PORT || 8081

app.listen(
    PORT, 
    console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)