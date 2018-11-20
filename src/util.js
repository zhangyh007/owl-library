import config from './config'

const request = (url, method, data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      method: method || 'GET',
      data: data || '',
      success (res) {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
}

const Toast = (text, icon, time) => {
  wx.showToast({
    title: text,
    time: time || 1500,
    icon: icon
  })
}

const showModal = (title, content) => {
  wx.showModal({
    title,
    content,
    showCancel: false
  })
}
export {
  request,
  Toast,
  showModal
}
