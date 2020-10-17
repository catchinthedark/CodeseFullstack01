const db = require('../utils/db');
const security = require('../utils/security');
const createError = require('http-errors');

const requireLogin = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodeToken = await security.verifyToken(token);
        req.username = decodeToken.username;
        req.role = decodeToken.role;
        next();
    } catch (err) {
        next(createError.Unauthorized('Fail to authorize!'));
    }
    next();
}

const requireRole = (role) => async(req, res, next) => {
    if (req.role === role) {
        next();
    } else {
        next(createError.Forbidden('Forbidde'))
    }
}

module.exports = {
    requireLogin,
    requireRole
}