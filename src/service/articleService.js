import request from '../utils/request'

export function  getList(token,page){
    return request({
        url:'/articles/'+token+'/'+page,
        method:'get'
    })
}

export function getToken(){
    return request({
        url:'/articles/init',
        method:'get'
    })
}