import {request} from "@/network/request";

export function  getHomedata(){
  return request({
    url:'/home/data'
  })
}

export function checkLogin(){
  return request({
    url:'/home/checklogin'
  })
}
