//Have to have 4 params
const errorHandle = (err, req, res, next) => {
    if (err.code > 400 && err.code < 500) {
        res.status(err.code).send(err.message);
    } else {
        res.status(400).send('Bad request!!!');
    }
}

const tryCatch = (f) => async(req, res, next) => {
    try {
        await f(req, res);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    errorHandle,
    tryCatch
}