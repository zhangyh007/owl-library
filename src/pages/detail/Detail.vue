<template>
  <div class="detail">
    <BookInfo :bookInfo="bookInfo"></BookInfo>
    <CommentList v-if="commentList.length !== 0" :commentList = commentList></CommentList>
    <div class="comment" v-if="showAdd">
      <textarea
        v-model="comment"
        placeholder="评论区：大侠，请积极发言"
        :maxlength="100"></textarea>
      <div class="location">
        <span>
          地理位置:
          <span class="color-primary">
            {{location || '无'}}
          </span>
        </span>
        <switch class="location-switch" :checked="location" color="#EA5A49" @change="getLocation"></switch>
      </div>
      <div class="phone">
        <span>
          手机型号:
          <span class="color-primary">
            {{phone || '无'}}
          </span>
        </span>
        <switch class="phone-switch" :checked="phone" color="#EA5A49" @change="getPhone"></switch>
      </div>
      <button class="btn" @click="addComment">评论</button>
    </div>
    <div class="loadmore-text" v-else>
      提示：未登录或已评论无法评论
    </div>
    <button open-type="share" @click="share" class="btn" :style="showAdd ? {'margin-top': '20px'} : ''">转发给好友</button>
  </div>
</template>

<script>
  import { request, showModal } from '@/util'
  import BookInfo from '@/components/BookInfo'
  import CommentList from '@/components/CommentList'
  export default {
    name: 'Detail',
    components: {
      BookInfo,
      CommentList
    },
    data () {
      return {
        commentList: [],
        userInfo: {},
        bookId: '',
        bookInfo: {},
        comment: '',
        location: '',
        phone: ''
      }
    },
    computed: {
      showAdd () {
        // 未登录
        if (!this.userInfo.openId) {
          return false
        }
        // 评论列表里有自己的openId
        if (this.commentList.filter(v => v.openId === this.userInfo.openId).length) {
          return false
        }
        return true
      }
    },
    methods: {
      async getDetail () {
        try {
          let res = await request('/weapp/bookdetail', 'GET', {id: this.bookId})
          this.bookInfo = res
          wx.setNavigationBarTitle({
            title: this.bookInfo.title
          })
          console.log('detail', res)
        } catch (e) {
          console.log(e)
        }
      },
      async getComment () {
        try {
          let commentList = await request('/weapp/commentlist', 'GET', {bookId: this.bookId})
          this.commentList = commentList.commentList || []
          console.log('commentList', commentList)
        } catch (e) {
          console.log(e)
          showModal('失败', e.data.msg)
        }
      },
      getLocation (e) {
        // ak
        const ak = 'okMyLjN7YCazQkd6Dra1FhY8KqTlPIDg'
        let url = 'http://api.map.baidu.com/geocoder/v2/'
        if (e.target.value) {
          wx.getLocation({
            success: res => {
              // console.log('location', res)
              wx.request({
                url,
                data: {
                  ak,
                  output: 'json',
                  location: `${res.latitude},${res.longitude}`
                },
                success: response => {
                  console.log('location', response)
                  if (response.data.status === 0) {
                    this.location = response.data.result.formatted_address
                  }
                },
                fail: err => {
                  console.log(err)
                }
              })
            }
          })
        } else {
          this.location = ''
        }
      },
      getPhone (e) {
        if (e.target.value) {
          const phone = wx.getSystemInfoSync()
          this.phone = phone.model
          console.log('phone', phone)
        } else {
          this.phone = ''
        }
      },
      async addComment () {
        if (!this.comment) {
          return
        }
        const data = {
          comment: this.comment,
          location: this.location,
          phone: this.phone,
          bookId: this.$root.$mp.query.id,
          openId: this.userInfo.openId
        }
        console.log('评论', data)
        try {
          let res = await request('/weapp/addcomment', 'POST', data)
          console.log('comment', res)
          showModal('成功', '评论成功！')
          this.comment = ''
          this.getComment()
        } catch (e) {
          showModal('失败', '评论发布失败')
          console.log(e)
        }
      }
    },
    onShareAppMessage (res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log('转发', res.target)
      }
      return {
        path: 'pages/detail/main?id=' + this.$root.$mp.query.id
      }
    },
    mounted () {
      this.bookId = this.$root.$mp.query.id
      this.getDetail()
      this.getComment()
      const userInfo = wx.getStorageSync('userInfo')
      if (userInfo) {
        this.userInfo = userInfo
      }
      // this.comment = '.......'
    },
    onUnload () {
      this.comment = ''
      this.location = ''
      this.phone = ''
    }
  }
</script>

<style scoped lang="less">
  .comment {
    margin-top: 15rpx;
    /*padding: 15rpx;*/
    textarea {
      background: #f1f1f1;
      font-size: 14px;
      width: 730rpx;
      height: 200rpx;
      padding: 10rpx;
    }
  }
  .location {
    font-size: 14px;
    margin: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .location-switch {
    }
  }
  .phone {
    font-size: 14px;
    margin: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn {
    background: #EA5A49;
    width: 750rpx;
    color: #fff;
    /*position: fixed;*/
    /*z-index: 5;*/
    /*bottom: 0;*/
    /*height: 40px;*/
  }
</style>
