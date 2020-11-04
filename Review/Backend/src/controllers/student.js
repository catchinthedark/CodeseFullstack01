const Student = require('../services/student');

const getById = async(req, res) => {
    const { data } = await Student.getById(req.params.id);
    res.send(data);
}

module.exports = {
    getById
}