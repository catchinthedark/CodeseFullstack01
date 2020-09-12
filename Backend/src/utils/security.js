const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const db = require('./db');

const { JWT_SECRET_KEY } = process.env;
const SALT = crypto.randomBytes(16).toString('hex');
const SALT_ROUND = 10;
const keyLength = 24;
const algorithm = 'aes-192-cbc';
const pwd = 'Password I use to generate 1-direction encryption key';
const key = crypto.scryptSync(pwd, 'salt', 24);
const iv = crypto.randomBytes(16);

//1. Encrypt 1 direction
const generatePassword = async(password) => {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(password, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
};

//2. Encrypt 2 directions
const generateToken = ({ username, role }) => {
    const token = jwt.sign({ username, role }, JWT_SECRET_KEY, {
        expiresIn: 1000 * 60 * 60 * 24
    });
    return token;
}

//3. Verify 1-direction encryption
const verifyPassword = async(password, encrypted) => {
    const decifer = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decifer.update(encrypted, 'hex', 'utf8');
    decrypted += decifer.final('utf8');
    const res = password.localeCompare(decrypted);
    console.log(res === 0 ? 'dung' : 'sai');
    return res;
};

//4. Verify 2-direction encryption
const verifyToken = token => {
    const data = jwt.verify(token, JWT_SECRET_KEY);
    return data;
}

module.exports = {
    generatePassword,
    verifyPassword,
    generateToken,
    verifyToken
}