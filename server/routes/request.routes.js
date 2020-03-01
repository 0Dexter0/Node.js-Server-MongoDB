const {Router} = require('express');
const router = Router();
const Request = require('../models/Request');
const mongoose = require('mongoose');
router.get('/', async (req, res) => {
    console.log('hi');
    try {
        const start = parseInt(req.query.start)  || 0;
        const limit = parseInt(req.query.limit) || 10;
        const requests = await Request.find()
            .skip(start)
            .limit(limit);
        res.setHeader('Access-Control-Allow-Origin', '*');
       // console.log(requests)
        res.status(200).send(requests)
    } catch (err) {
        throw new Error(err);
        res.status(500).send({text: 'pidor'})
    }

});
router.get('/:id', async (req, res) => {
    console.log('hi');
    try {
         const requests = await Request.findById(req.params.id);
         res.setHeader('Access-Control-Allow-Origin', '*');
         console.log(req.params);
         res.status(200).send(requests)
    } catch (err) {
        throw new Error(err);
        res.status(500).send({text: 'pidor'})
    }

});
module.exports = router;
