import axios from 'axios'

const api = axios.create({
    baseURL: '',
    timeout: 30000,
    headers: {
        'key' : 'P47$QNDAv8PcFt(=n,7vb84f[8ChJ8855*tb,^]'
    }
})

export default api

