var express = require('express');
var router = express.Router();
var util = require('../modules/util')
var responseMessage = require('../modules/responseMessage')
var statusCode = require('../modules/statusCode')
var User = require('../model/user')

router.post('/signin', async (req, res) => {
    const {
        id,
        password
    } = req.body

    if(!id || !password){
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE))
        return;
    }

    const user = User.filter(user => user.id == id);

    if(user.length == 0) {
        res.status(statusCode. BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER))
        return;
    }

    if(user[0].password !== password) {
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.MISS_MATCH_PW))
        return;
    }

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, {userId: id}))

});

module.exports = router;
