import { myRequest } from './request.js'

//挂载到全局，让所有页面都能接收
// Vue.prototype.$myRequest = myRequest //挂载到Vue的原型上
export function channelsList(){
    return myRequest({
        url: '/good/channels.html',
    })
}
export function shopList(data){
    return myRequest({
        url: '/good/indexList.html',
        method: 'POST',
        data:data
    })
}