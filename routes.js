import express from 'express'
import webpush from 'web-push'


const router = express.Router();


// Subscribe Route
router.post('/subscribe/topic', async(req, res) => {
    // Get pushSubscription object
    try {
        const subscription = await req.body;
        console.log(subscription, 'jamz')
        // send 201 - resource created
         res.status(201).json({});

        // create payload
        const payload = JSON.stringify({ title: 'create subscription' })
        console.log(payload, 'lush')
        // Pass Object into sendNotification
        webpush.sendNotification(subscription, payload)

    } catch (error) {
        console.log(error)
    }
    
})






export default router;