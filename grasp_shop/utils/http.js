// 封装请求
function request(url,method = "get",data = {}) {
    return new Promise((resolve, reject) => {
        uni.request({
            url,
            data,
            method,
            header: {
                // 'Accept': '*/*',
                // 'Content-Type': 'application/json',//类型
                "Authorization": uni.getStorageSync('token')//请求头
            },
            success: (res) => {
                resolve(res)
            },
            fail: (err) => {
                reject(err)
            }
        })
    })
}
 
export {
    request
}