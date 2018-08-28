import axios from 'axios'

const service = axios.create({
    baseURL :'http://http://118.24.52.85:1337',
    timeout:5000
});

export default service