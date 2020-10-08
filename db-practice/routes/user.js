var express = require('express');
var router = express.Router();
let User = require('../models/user');
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let resMessage = require('../modules/responseMessage');

router.post('/signup', async (req, res) => {
    const {
        id,
        name,
        password,
        email
    } = req.body;

    if (!id || !name || !password || !email) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
        return;
    }
    // 사용자 중인 아이디가 있는지 확인
    // if (User.checkUser(id)) {
    //     res.status(statusCode.BAD_REQUEST)
    //         .send(util.fail(statusCode.BAD_REQUEST, resMessage.ALREADY_ID));
    //     return;
    // }

    const salt = 'dfw23EFVR3fefnd68FW3r4343';
    // User.push({id, name, password, email});
    const idx = await User.signup(id, name, password, salt, email);
    if (idx === -1) {
        return res.status(statusCode.DB_ERROR)
            .send(util.fail(statusCode.DB_ERROR, resMessage.DB_ERROR));
    }
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.CREATED_USER, {userId: idx}));
});


router.post('/signin', async (req, res) => {
    const {
        id,
        password
    } = req.body;

    if (!id || !password) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
        return;
    }

    const idx = await User.signin(id, password);
    if (idx === -1) {
        return res.status(statusCode.DB_ERROR)
            .send(util.fail(statusCode.DB_ERROR, resMessage.DB_ERROR));
    } 

    if (idx){
        res.status(statusCode.OK).send(util.success(statusCode.OK, resMessage.LOGIN_SUCCESS));        
    } else{
        res.status(statusCode.BAD_REQUEST).send(util.success(statusCode.BAD_REQUEST, resMessage.LOGIN_FAIL));        
    }
});

module.exports = router;