<template>
  <div class="books">
    <div class="mask" v-if="showMask"></div>
    <div class="search-box">
      <div class="search-input">
        <div class="search-icon"></div>
        <input
          class="search"
          type="text"
          confirm-type="search"
          v-model="searchKeyword"
          placeholder="请输入要搜索的图书名"
          @input="searchBook"
          @focus="showMask = true"
          @blur="hideMask">
        <div class="search-word" @click="cancelSearch">{{searchKeyword ? '取消' : ''}}</div>
      </div>

      <div class="searchList" v-if="searchKeyword">
        <div class="book-item" v-for="(book, index) in searchBookList" :key="book.id" @click="goDetail(book.id)">
          <img
            class="img"
            :src="book.image"
            mode="aspectFit">
          <span style="color: #ea5a49;word-wrap: break-word;white-space: pre-wrap">{{book.title}}</span>
          <span style="white-space: nowrap">{{book.author}}</span>
        </div>
        <div v-if="searchBookList.length === 0" class="text">没有找到您要的图书</div>
      </div>
    </div>
    <div style="height: 100rpx;"></div>
    <TopSwiper :topList="topList"></TopSwiper>
    <Card v-for="(item, index) in books" :key="item.id" :book="item"></Card>
    <p class="footer-text"  v-if="books.length === 0">
      还没有图书，赶紧添加吧！
    </p>
    <p class="loadmore-text footer-text" v-show="!loadmore">
      <span class="line-bottom">
        <span style="border-bottom: 1rpx solid #f0f0f0;"></span>
        <span></span>
      </span>
      <span style="margin: 0 10px;">数据全部加载</span>
      <span class="line-bottom">
        <span style="border-bottom: 1rpx solid #f0f0f0;"></span>
        <span></span>
      </span>
    </p>
  </div>
</template>

<script>
  import { request, showModal } from '@/util'
  import Card from '@/components/Card'
  import TopSwiper from '@/components/TopSwiper'
  export default {
    name: 'Books',
    components: {
      Card,
      TopSwiper
    },
    data () {
      return {
        topList: [],
        books: [],
        pageNo: 0,
        pageSize: 10,
        loadmore: true,
        searchKeyword: '',
        searchBookList: [],
        showMask: false
      }
    },
    methods: {
      async getBookList () {
        try {
          wx.showNavigationBarLoading() // 显示加载loading
          let res = await request('/weapp/booklist', 'GET', {pageNo: this.pageNo, pageSize: this.pageSize})
          // console.log(res)
          this.books = this.books.concat(res.bookList)
          if (res.bookList.length < this.pageSize) {
            this.loadmore = false
          } else {
            this.pageNo++
          }
          wx.stopPullDownRefresh() // 停止下拉加载动画
          wx.hideNavigationBarLoading() // 隐藏加载loading
        } catch (e) {
          console.log(e)
        }
      },
      async getTopBooks () {
        try {
          let res = await request('/weapp/top', 'Get')
          this.topList = res.topList
          // console.log('topList', this.topList)
        } catch (e) {
          console.log(e)
        }
      },
      async searchBook () {
        if (!this.searchKeyword) {
          return
        }
        // console.log(this.searchKeyword)
        try {
          let res = await request('/weapp/searchBooks', 'POST', {keyword: this.searchKeyword})
          // console.log(res)
          this.searchBookList = res.bookList
        } catch (e) {
          showModal('错误', e.msg)
        }
      },
      goDetail (id) {
        this.searchKeyword = ''
        wx.navigateTo({
          url: '/pages/detail/main?id=' + id
        })
      },
      cancelSearch () {
        this.searchKeyword = ''
        this.searchBookList = []
      },
      hideMask () {
        if (!this.searchKeyword) {
          this.showMask = false
        }
      }
    },
    onPullDownRefresh () { // 下拉刷新
      this.pageNo = 0
      this.loadmore = true
      this.books = []
      this.getBookList()
      this.getTopBooks()
    },
    onReachBottom () {
      if (this.loadmore) {
        this.getBookList()
      }
    },
    onShareAppMessage (res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        // console.log('转发', res.target)
      }
      return {
        text: '猫头鹰图书室',
        path: 'pages/books/main'
      }
    },
    mounted () {
      this.getBookList()
      this.getTopBooks()
    }
  }
</script>

<style scoped lang="less">
  .mask {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
  }
  .search-box {
    width: 750rpx;
    height: 50rpx;
    padding: 20rpx 10rpx;
    /*position: relative;*/
    position: fixed;
    background: #f2f2f2;
    z-index: 999;
    /*margin-bottom: 10px;*/
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .search-input {
      display: flex;
      justify-content: left;
      align-items: center;
      .search-icon {
        width: 40rpx;
        height: 40rpx;
        background: url("./../../../static/img/search.svg");
        background-repeat: no-repeat;
        background-size: contain;
        margin: 0 20rpx;
      }
      .search-word {
        width: 60rpx;
        height: 40rpx;
        color: #666;
        margin: 0 10rpx;
        font-size: 14px;
        text-align: right;
      }
      .search {
        width: 560rpx;
        height: 40rpx;
        line-height: 40rpx;
        border: 1px solid #ea5a49;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        font-size: 14px;
        background: #fff;
        padding-left: 20rpx;
      }
    }
    .searchList {
      width: 710rpx;
      /*margin: 0 auto;*/
      max-height: 400px;
      border-radius: 5px;
      border-top: 1px solid #cacaca;
      border-bottom: 1px solid #cacaca;
      padding: 20rpx;
      padding-bottom: 0;
      height: auto;
      position: absolute;
      left: 0;
      top: 105rpx;
      z-index: 10;
      font-size: 14px;
      background: #EAEAEA;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .book-item {
        width: 690rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #FFF;
        padding: 5px;
        border-radius: 5px;
        margin-bottom: 10px;
      }
      .img {
        width: 70rpx;
        height: 100rpx;
        margin-right: 10px;
      }
    }
    .text {
      height: 20px;
      line-height: 20px;
      font-size: 16px;
      text-align: center;
      color: #333;
      margin-bottom: 20rpx;
    }

  }
  .footer-text {
    display: flex;
    justify-content: center;
    align-items: center;
    .line-bottom {
      display: inline-flex;
      flex-direction: column;
      width: 60px;
    }
  }
</style>
