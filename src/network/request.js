// export function instance1(){
//
// }
// export function instance2(){
//
// }
import axios from "axios";

export function request(config){
    const instance = axios.create({
      baseURL:'',
      timeout:5000,
      headers:{
      }
    })
    //拦截器的使用
    //请求拦截
    instance.interceptors.request.use(config=>{
      // console.log(config);
      //1.config 信息不符合服务器要求
      //2.在界面显示的图标，等待请求
      //3.某些网络请求，比如登陆是否携带token
      return config
    },error => {
      // console.log(error);
    })

    //响应拦截
    instance.interceptors.response.use(res=>{
      return res;
      },err => {
      console.log(err);
    })
    return instance(config)
}
