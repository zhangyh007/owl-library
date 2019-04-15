<template>
  <div class="me">
    <div class="user-info">
      <img :src="userInfo.avatarUrl" alt="">
      <button class="login" open-type="getUserInfo" v-if="visible" @click="login">
        {{session ? '获取用户信息' :'点击登录'}}
      </button>
      <p class="nickname" v-else>{{userInfo.nickName}}</p>
    </div>
    <YearProgress></YearProgress>
    <button @click="scanBook" class="btn" v-if="userInfo.openId">添加图书</button>
  </div>
</template>

<script>
  import { Toast, request, showModal } from '@/util'
  import qcloud from 'wafer2-client-sdk'
  import config from '@/config'
  import YearProgress from '@/components/YearProgress'
  export default {
    name: 'Me',
    components: {
      YearProgress
    },
    data () {
      return {
        userInfo: {
          avatarUrl: require('./../../../static/img/unlogin.png'),
          nickName: '未登录'
        },
        visible: false,
        sesstion: ''
      }
    },
    methods: {
      login () {
        let vm = this
        qcloud.setLoginUrl(config.login)
        qcloud.login({
          success: function (userInfo) {
            qcloud.request({
              url: config.user,
              login: true,
              success (res) {
                Toast('登录成功', 'success', 2000)
                wx.setStorageSync('userInfo', res.data.data)
                vm.userInfo = res.data.data
              }
            })
          },
          fail: function (err) {
            console.log('登录失败', err)
            Toast('登录失败', 'none', 2000)
          }
        })
      },
      async addBook (isbn) {
        // console.log('isbn', isbn)
        try {
          let res = await request('/weapp/addbook', 'POST', {
            isbn,
            openId: this.userInfo.openId
          })
          // console.log(res)
          if (res.title) {
            showModal('添加成功', `${res.title}添加成功`)
          } else {
            showModal('添加失败')
          }
        } catch (e) {
          showModal('失败', e.data.msg)
        }
      },
      scanBook () { // 扫描条形码
        // console.log('添加图书')
        wx.scanCode({
          onlyFromCamera: true,
          success: (res) => {
            // console.log(res)
            if (res.result) {
              this.addBook(res.result)
            }
          }
        })
      }
    },
    created () {
      this.session = qcloud.Session.get()
      let userInfo = wx.getStorageSync('userInfo')
      if (userInfo) {
        this.userInfo = userInfo
      } else {
        this.visible = true
      }
    },
    watch: {
      userInfo () {
        if (Object.keys(this.userInfo).length === 0) {
          this.visible = true
        } else {
          this.visible = false
        }
      }
    },
    session () {
      // console.log('session', this.session)
    }
  }
</script>

<style scoped lang="less">
  .me {
    padding: 0 30rpx;
    .user-info {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .login {
        width: 100px;
        height: 30px;
        line-height: 30px;
        font-size: 16px;
      }
      .nickname {
        /*margin-top: 100rpx;*/
        text-align: center;
        height: 30px;
        line-height: 30px;
      }
      img {
        width: 150rpx;
        height: 150rpx;
        margin: 20rpx;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
      }
    }
    .btn {
      margin: 20px 0;
      width: 100%;
      color: #fff;
      background: #EA5149;
      height: 80rpx;
      line-height: 80rpx;
      font-size: 30rpx;
      &:hover {
        background: #FA5149;
      }
      &:active {
        background: #FA5149;
      }
    }
  }
</style>
