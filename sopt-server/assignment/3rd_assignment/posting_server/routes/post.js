var express = require('express');
var router = express.Router();
const Posts = require('../models/posts');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
const util = require('../modules/util');

// 게시글 고유 id 값 조회
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

// 게시글 생성
router.post('/', async (req, res) => {
    const {
        id,
        title,
        text
    } = req.body
    
    if(!id || !title || !text){
        res.status(statusCode.BAD_REQUEST).send(statusCode.BAD_REQUEST, resMessage.NULL_VALUE)
        return
    }

    if(Posts.filter(post => post.id == id).length > 0){
        res.status(statusCode.BAD_REQUEST).send(statusCode.BAD_REQUEST, resMessage.ALREADY_ID)
        return
    }

    Posts.push({
        id,
        title,
        text
    })
    console.log(Posts)

    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.POSTING_SUCCESS, {postId: id}));

})

// 게시글 고유 id값을 가진 게시글을 수정
router.put('/:id', async (req, res) => {
    const {
        id,
        title,
        text
    } = req.body
    
    if(!id || !title || !text){
        res.status(statusCode.BAD_REQUEST).send(statusCode.BAD_REQUEST, resMessage.NULL_VALUE)
        return
    }

    Posts.pop(id)

    Posts.push({
        id,
        title,
        text
    })
    console.log(Posts)

    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.POSTING_SUCCESS, {modifiedId: id}))
})


router.delete('/:id', async (req, res) =>{
    const id = req.params.id

    if(!id){
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE))
        return
    }

    if(Posts.filter(post => post.id == id) === undefined){
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, resMessage.OUT_OF_VALUE))
        return
    }

    Posts.pop(id)

    res.status(statusCode.OK).send(util.success(statusCode.OK, resMessage.POSTING_SUCCESS, {deletedId: id}))
})

module.exports = router