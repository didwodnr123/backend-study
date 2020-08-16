var express = require('express')
var router = express.Router()
var User = require('/Users/yangjaeug/Desktop/Server_Study/sopt-server/3nd_week/practice/models/user.js')

router.post('/signup', async (req, res) => {
        const { id, name, password, email } = req.body;
        User.push({id, name, password, email});
        res.status(200).send(User);
    });

module.exports = router