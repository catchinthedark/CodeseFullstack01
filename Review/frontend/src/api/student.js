import API from './api';

export const getAll = async() => {
    try {
        const res = await API.get(`/student`);
        return {
            data: res.data,
            status: true
        };
    } catch (err) {
        return {
            message: "Cannot get data",
            status: false
        };
    }
}

export const getById = async(id) => {
    try {
        const res = await API.get(`/student/${id}`);
        return {
            data: res.data,
            status: true
        }
    } catch (err) {
        return {
            message: "Cannot get data",
            status: false
        };
    }
}

export const add = async(newStudent) => {
    try {
        const res = await API.post(`/student`, newStudent);
        return {
            status: true
        }
    } catch (err) {
        return {
            message: "Adding student failed",
            status: false
        }
    }
}