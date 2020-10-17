const auth = require('../services/auth');
const account = require('../services/account');

const login = async(req, res, next) => {
    const account = {
        username: req.body.username,
        password: req.body.password
    }
    const result = await auth.login(account);
    if (result) {
        res.send({
            status: 1,
            token: result
        })
    } else {
        res.send({
            status: 0,
            message: 'Login failed'
        });
    }
}

const getMe = async(req, res, next) => {
    const account = await auth.getMe(req.username);
    res.send(account);
}

module.exports = {
    login,
    getMe
}