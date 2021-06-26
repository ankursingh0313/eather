// import fetch from 'node-fetch';
import axios from 'axios';
const fetch = axios.create({
                baseURL: 'http://localhost:4000',
                timeout: 1000,
            });
const API_DOMAIN = 'http://localhost:4000';

async function isLogin() {
    const result = await fetch.post('/islogin');
    return result.data;
}

export {
    isLogin
}