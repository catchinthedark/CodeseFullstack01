import API from './api';

export const getAll = async() => {
    try {
        const res = await API.get(`/class`);
        return {
            data: res.data,
            status: true
        }
    } catch (err) {
        return {
            message: 'Cannot get data',
            status: false
        }        
    }
}

export const getById = async(id) => {
    try {
        const res = await API.get(`/class/${id}`);
        return {
            data: res.data,
            status: true
        }
    } catch (err) {
        return {
            message: 'Cannot get data',
            status: false
        }        
    }
}

export const add = async(newClass) => {
    try {
        const res = await API.post(`/class`, newClass);
        return {
            status: true
        }
    } catch (err) {
        return {
            message: 'Adding class failed',
            status: false
        }
    }
}