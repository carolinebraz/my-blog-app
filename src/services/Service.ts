import axios from 'axios';

const api = axios.create({
    baseURL: 'https://myblog-bfkt.onrender.com'
})

export const registerUser = async (url: string, data: Object, setData: Function) => {
    const resp = await api.post(url, data)
    setData(resp.data)
}

export const login = async (url: string, data: Object, setData: Function) => {
    const resp = await api.post(url, data)
    setData(resp.data)
}