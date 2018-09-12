import axios from 'axios'

const request = axios.create({
    baseURL : process.env.VUE_APP_APIURL,
    timeout:5000
});

var api = process.env.VUE_APP_APIURL;

export default request;