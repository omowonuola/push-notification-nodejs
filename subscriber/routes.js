import express from 'express'

const router = express.Router();

// Subscribe Route
router.post('/:subscriber', async(req, res) => {

    console.log("Subscriber: ", req.params.subscriber)
    console.log("Message: ", req.body)

    res.json({subscriber:req.params.subscriber, body: req.body})
    
})

export default router;