'use strict';

require('dotenv').config();

const express = require('express');
const router = express.Router();

const userMiddleware = require('./middlewares/users.js');

router.get('/', userMiddleware.isLoggedIn);

router.get('/user-info', userMiddleware.isLoggedIn, (req,res) => {
    return res.status(200).send({
        id: req.id,
        uid: req.uid,
        username:req.username
    });
});

module.exports = router;