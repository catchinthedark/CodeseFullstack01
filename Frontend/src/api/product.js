import API from './api';

export const getAllProduct = async(params) => {
    try {
        const res = await API.get('/product', {params});  
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

export const getProductById = async(id) => {
    try {
        const res = await API.get(`/product/${id}`);  
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