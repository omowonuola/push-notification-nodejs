import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';
import webpush from 'web-push'
import path from 'path'
import colors from 'colors'



dotenv.config()

const app = express()
app.use(cors());
app.use(express.urlencoded({limit: '50mb', extended: true }));
app.use(express.json({limit: '50mb'}));

const publicVapidKey = process.env.PUBLICVAPIDKEY
const privateVapidKey = process.env.PRIVATEVAPIDKEY

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);



const PORT = process.env.PORT || 8081

app.listen(
    PORT, 
    console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)