var express = require('express');
var router = express.Router();
const Posts = require('../models/posts');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
const util = require('../modules/util');

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const post = Posts.filter(post => post.id == id)[0];

    if(post === undefined){
        res.status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_USER));
        return; 
    }

    const dto = {
        id: post.id,
        title: post.title,
        text: post.text
    }
    // 성공 - login success와 함께 user Id 반환
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.READ_PROFILE_SUCCESS, dto));
})

module.exports = router