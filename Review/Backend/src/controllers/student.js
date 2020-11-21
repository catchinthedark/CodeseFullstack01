const Student = require('../services/student');

const getAll = async(req, res) => {
    const { data } = await Student.getAll();
    res.send(data);
} 

const getById = async(req, res) => {
    const { data } = await Student.getById(req.params.id);
    res.send(data);
}

const add = async(req, res) => {
    console.log(req.body);
    const { data } = await Student.add(req.body);
    res.send('Student added!');
}

module.exports = {
    getAll,
    getById,
    add
}