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

export const search = async (url: string, setData: Function, header: Object) => {
    const resp = await api.get(url, header)
    setData(resp.data)
}

export const register = async (url: string, data: Object, setData: Function, header: Object) => {
    const resp = await api.post(url, data, header)
    setData(resp.data)
}

export const update = async (url: string, data: Object, setData: Function, header: Object) => {
    const resp = await api.put(url, data, header)
    setData(resp.data)
}

export const remove = async (url: string, header: Object) => {
    await api.delete(url, header)
}