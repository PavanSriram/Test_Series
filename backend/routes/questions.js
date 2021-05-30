const router = require('express').Router();
const Questions = require('../model');

router.get('/', async (req, res) => {
    try{
        const ques = await Questions.find();
        res.json(ques);
    }
    catch(err){
        err => res.status(400).json('Error: ' + err);
    }
});

// router.post('/', async (req, res) => {
//     const ques = new Questions({
//         question: req.body.question
//     })
//     try{
//         const a1 = await ques.save();
//         res.json(a1);
//     }
//     catch(err){
//         err => res.status(400).json('Error: ' + err);
//     }
// });

module.exports = router;