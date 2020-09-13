const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');

const { JWT_SECRET_KEY } = process.env;
const { CRYPTO_SECRET_KEY } = process.env;

//1. Encrypt 1 direction
const generatePassword = async(password) => {
    return crypto.AES.encrypt(password, CRYPTO_SECRET_KEY).toString();
};

//2. Encrypt 2 directions
const generateToken = ({ username, role }) => {
    const token = jwt.sign({ username, role },
        JWT_SECRET_KEY, {
            expiresIn: 1000 * 60 * 60 * 24
        }
    );
    return token;
}

//3. Verify 1-direction encryption
const verifyPassword = async(password, encrypted) => {
    const decrypted = (crypto.AES.decrypt(encrypted, CRYPTO_SECRET_KEY)).toString(crypto.enc.Utf8);
    const res = password.localeCompare(decrypted);
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