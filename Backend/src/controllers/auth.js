const auth = require('../services/auth');

const login = async(req, res, next) => {
    const account = {
        username: req.body.username,
        password: req.body.password
    }
    const result = await auth.login(account);
    if (result) {
        res.send({
            status: 1,
            message: 'Login successfully!'
        })
    } else {
        res.status(400).send({
            status: 0,
            message: 'Username or password incorrect!'
        })
    }
}

module.exports = {
    login
}