<template>
  <div class="comments">
    <div class="control-box">
      <div
        class="control-item left"
        :class=" current === 0 ? 'active' : '' " @click="ChangeTab(0)">
        我的评论
      </div>
      <div
        class="control-item right"
        :class=" current === 1 ? 'active' : '' "
        @click="ChangeTab(1)">
        我的图书
      </div>
    </div>
    <div v-if="userInfo.openId" style="position: relative;height: 200px;">
      <!--v-if-->
      <CommentList
        v-if="current === 0"
        type="user"
        :commentList="comments"
        :color="true">
      </CommentList>
      <div v-if="current === 1">
        <div class="page-title">
          我的图书
        </div>
        <Card v-for="book in bookList" :key="book.id" :book="book"></Card>
        <div class="notice" v-if="bookList.length === 0">还没有添加过图书，快去添加吧！</div>
      </div>

      <!--swiper开始-->
      <!--<div style="width: 750rpx;" class="transition-left" :class="current === 0 ? 'translate-left' : 'translate-left-item' ">
        <CommentList
          type="user"
          :commentList="comments"
          :color="true">
        </CommentList>
      </div>
      <div style="width: 750rpx;" class="transition-right" :class="current === 1 ? 'translate-right-item' : 'translate-right' ">
        <div class="page-title">
          我的图书
        </div>
        <Card v-for="book in bookList" :key="book.id" :book="book"></Card>
        <div class="notice" v-if="bookList.length === 0">还没有添加过图书，快去添加吧！</div>
      </div>-->
      <!--swiper结束-->
    </div>
    <div class="notice" v-else style="display: flex;justify-content: center;align-items: center;">
      <div class="sorry"></div>
      <span style="color: #ea5a49;margin-left: 20px;">很抱歉!您还没有登录</span>
    </div>
  </div>
</template>

<script>
  import {request} from '@/util'
  import CommentList from '@/components/CommentList'
  import Card from '@/components/Card'
  export default {
    name: 'Comments',
    data () {
      return {
        comments: [],
        userInfo: {},
        bookList: [],
        current: 0
      }
    },
    components: {
      CommentList,
      Card
    },
    methods: {
      init () {
        wx.showNavigationBarLoading()
        this.getComments()
        this.getBooks()
        wx.hideNavigationBarLoading()
      },
      // 获取用户的所有的评论列表
      async getComments () {
        let comments = await request('/weapp/commentlist', 'GET', {
          openId: this.userInfo.openId
        })
        this.comments = comments.commentList || []
      },
      async getBooks () {
        let books = await request('/weapp/booklist', 'GET', {
          openId: this.userInfo.openId
        })
        this.bookList = books.bookList || []
      },
      ChangeTab (current) {
        this.current = current
      },
      getUserInfo () {
        let userInfo = wx.getStorageSync('userInfo')
        if (userInfo) {
          this.userInfo = userInfo
        }
      }
    },
    created () {
      this.getUserInfo()
    },
    onPullDownRefresh () {
      this.init()
      // this.getUserInfo()
      wx.stopPullDownRefresh()
    },
    onShow () {
      this.getUserInfo()
      this.init()
    }
  }
</script>

<style scoped lang="less">
  .control-box {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 14px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    .control-item {
      width: 80px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border: 1px solid #ea5a49;
      color: #333;
    }
    .left {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    .right {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    .active {
      background: #ea5a49;
      color: #fff;
    }
  }
  .page-title {
    font-size: 18px;
    color: #fff;
    background: #EA5A49;
    padding: 10px 10px;
  }
  .notice {
    text-align: center;
    color: #333;
    font-size: 16px;
  }
  .sorry {
    width: 50px;
    height: 50px;
    background: url("./../../../static/img/sorry.svg");
    background-size: contain;
  }
  .transition-left {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
  }
  .transition-right {
    position: absolute;
    top: 0;
    left: 750rpx;
    z-index: 5;
  }
  .translate-left {
    left: 0;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
  }
  .translate-left-item {
    left: -750rpx;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
  }
  .translate-right {
    left: 750rpx;
    -webkit-transition: left 0.3s ease-in-out;
    transition: left 0.3s ease-in-out;
  }
  .translate-right-item {
    left: 0;
    -webkit-transition: left 0.3s ease-in-out;
    transition: left 0.3s ease-in-out;
  }
</style>
