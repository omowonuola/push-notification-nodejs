import axios from 'axios';
import express from 'express'

const router = express.Router();

let subscriptionList = {}


// Subscribe Route
router.post('/subscribe/:topic', async(req, res) => {

    if (!req.params.topic || req.params.topic == ""){
        console.log("No Topic provided");
        res.status(201).json({msg:"Missing Topic"})
        return
    }

    if (!req.body.url || req.body.url == ""){
        console.log("No URL provided in the body")
        res.status(201).json({msg:"Missing URL"})
        return
    }

    let topicSubscribers = {}
    if (subscriptionList[req.params.topic] !== undefined) {
        topicSubscribers =  subscriptionList[req.params.topic]
    }

    if (topicSubscribers[req.body.url] === undefined) {
        topicSubscribers[req.body.url] = {url: req.body.url}
    }

    subscriptionList[req.params.topic] = topicSubscribers

    res.json({topic:req.params.topic, url:req.body.url})
})



// Publish Route
router.post('/publish/:topic', async(req, res) => {

    if (!req.params.topic || req.params.topic == ""){
        console.log("No Topic provided");
        res.status(201).json({msg:"Missing Topic"})
        return
    }

    if (!req.body){
        console.log("No Body provided");
        res.status(201).json({msg:"Missing Body"})
        return
    }
    

    let payload = {topic: req.params.topic, data: req.body}

    let topicSubscribers = {}
    if (subscriptionList[req.params.topic] !== undefined) {
        topicSubscribers =  subscriptionList[req.params.topic]
    }

    

    let subscribersCount = 0
    for (const key in topicSubscribers) {
    
        let subscriber = topicSubscribers[key]

        const pushToSubscriber = {
            method: 'POST',
            url: subscriber.url,
            data: payload,
            headers: {
                'Content-Type': 'application/json',
            }
        }

        try {            
            await axios(pushToSubscriber)
            subscribersCount++
        } catch (error) {
            console.log("Error Reaching Subsriber URL: ", subscriber.url)
        }

    }

    let message = `Topic sent to ${subscribersCount} subscriber(s)`
    res.json({topic:req.params.topic, message: message})
   
})


export default router;