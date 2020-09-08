import API from './api';

export const getAllCategory = async(params) => {
    try {
        const res = await API.get('/category', {params});  
        return {
            data: res.data,
            status: true
        }
    } catch (err) {
        return {
            message: "Cannot get data ",
            status: false
        };
    }
    
}

export const getCategoryById = async(id) => {
    try {
        const res = await API.get(`/category/${id}`);  
        return {
            data: res.data,
            status: true
        }
    } catch (err) {
        return {
            message: "Cannot get data ",
            status: false
        };
    }
    
}