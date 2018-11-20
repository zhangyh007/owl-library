

<script>
  import { request } from './util'
  // import qcloud from 'wafer2-client-sdk'
  // import config from './config'
  export default {
    name: 'App',
    async created () {
      // let user = wx.getStorageSync('userInfo')
      // if (!user) {
      //   qcloud.setLoginUrl(config.login)
      //   qcloud.login({
      //     success: function (userInfo) {
      //       console.log('登录成功', userInfo)
      //       Toast('登陆成功', 2000, 'success')
      //       wx.setStorageSync('userInfo', userInfo)
      //     },
      //     fail: function (err) {
      //       console.log('登录失败', err)
      //       Toast('登录失败', 2000, 'none')
      //     }
      //   })
      // }

      let app = await request('/weapp/demo')
      console.log('heheheh', app)
    }
  }
</script>

<style>
  .color-primary {
    color: #EA5149;
  }
  .loadmore-text {
    margin-top: 10px;
    font-size: 12px;
    text-align: center;
    color: #333;
    margin-bottom: 10px;
  }
</style>
