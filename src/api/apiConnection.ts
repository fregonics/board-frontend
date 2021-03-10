import axios from 'axios'

const apiConnection = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000
})

export default apiConnection;