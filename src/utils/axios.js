import axios from 'axios'

const instance = axios.create({
    baseURL :  process.env.NODE_ENV === 'development' ? '/' : 'http://10.0.2.127:8910/log_data',
    timeout : 15000
});

const xhr = {
    get(url,data,config){
        return new Promise((resolve ,reject) => {
            instance.get(url,{params:data},config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    post(url,data,config){
        return new Promise((resolve ,reject) => {
            instance.post(url,data,config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
};

export default xhr;