import axios from 'axios'
import qs from 'qs' //POST传参序列化

axios.defaults.timeout = 5000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'

export default{
    fetchGet(url,params){
        return new Promise((resolve,reject) =>{
            axios.get(url,params).then(res=>{
                resolve(res.data)
            }).catch(error=>{
                reject(error)
            })
        })
    },
    fetchPost(url,data={}){
        return new Promise((resolve,reject)=>{
            axios.post(url,qs.stringify(data)).then(res=>{
                resolve(res.data)
            }).catch(error=>{
                reject(error)
            })
        })
    }
}
