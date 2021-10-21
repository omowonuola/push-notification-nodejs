import express from 'express'
import { WebPushError } from 'web-push';

const router = express.Router();

// Subscribe Route
router.post('/subscribe', async(req, res) => {
    // Get pushSubscription object
    try {
        const subscription = await req.body;

        // send 201 - resource created
         res.status(201).json({});

        // create payload
        const payload = JSON.stringify({ title: 'Push Test'})

        // Pass Object into sendNotification
        WebPush.sendNotification(susbscription, payload)

    } catch (error) {
        console.log(error)
    }
    
})












export default router;