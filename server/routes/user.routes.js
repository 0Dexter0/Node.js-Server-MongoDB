const {Router} = require('express');
const router = Router();
const User = require('../models/User');
const mongoose = require('mongoose');
router.get('/', async (req, res) => {
    console.log('hi');
    try {
        const start = parseInt(req.query.start) || 0;
        const limit = parseInt(req.query.limit) || 10;
        const query = req.query.searchQuery;
        const searchParams = (query)?{ $text: { $search: query } }:{};
        const users = await User.find(searchParams)
            .skip( start )
            .limit( limit );
        res.setHeader('Access-Control-Allow-Origin', '*');
       // console.log(users)
        res.status(200).send(users)
    } catch (err) {
        throw new Error(err);
        res.status(500).send({text: 'pidor'})
    }
});
router.get('/:id', async (req, res) => {
    console.log('hi');
    try {
        const user = await User.findById(req.params.id);
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log(req.params)
        res.status(200).send(user)
    } catch (err) {
        throw new Error(err);
        res.status(500).send({text: 'pidor'})
    }

});

module.exports = router;

