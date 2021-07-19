import axios from 'axios';

const baseUrl = 'http://142.93.6.122:8000';
const axiosConfig = {
    'Content-Type': 'application/json'
}

export const getCountries = () => {
    return axios.get(`${baseUrl}/countries`, axiosConfig).then(res => {
        if(res.data) return res.data;
    }).catch(err => {
        throw(err);
    }).finally();
}

export const registerUser = (data) => {
    return axios.post(`${baseUrl}/api/auth/register`, data, axiosConfig).then(res => {
        if(res.data) return res.data;
    }).catch(err => {
        throw(err);
    }).finally();
}
