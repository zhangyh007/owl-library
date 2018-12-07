<template>
  <div class="book-info">
    <div class="thumb">
      <img
        class="backImage"
        :src="bookInfo.image"
        :alt="bookInfo.alt"
        mode="aspectFill">
      <img
        class="img"
        :src="bookInfo.image"
        mode="aspectFit">
      <div class="info">
        <div class="title">
          {{bookInfo.title}}
        </div>
        <div class="author">
          {{bookInfo.author}}
        </div>
      </div>
    </div>
    <div class="detail">
      <span>
        <img class="avatar" :src="userInfo.image">
        {{userInfo.nickName}}
      </span>
      <div class="right color-primary" style="display: flex;">
        <span style="margin-right: 10px">{{bookInfo.rate}}分</span>
        <Rate :rate="bookInfo.rate"></Rate>
      </div>
    </div>
    <div class="detail">
      {{bookInfo.publisher}}
      <div class="right">
        价格：
        {{bookInfo.price}}
      </div>
    </div>
    <div class="tags">
      <div class="badage" v-for="tag in bookInfo.tags" :key="tag">{{tag}}</div>
    </div>
    <div class="summary">
      简介：
      <p v-for="(summary, i) in bookInfo.summary" :key="i">{{summary}}</p>
    </div>
  </div>
</template>

<script>
  import Rate from '@/components/Rate'
  export default {
    name: 'BookInfo',
    components: {
      Rate
    },
    props: {
      bookInfo: {
        type: Object,
        required: true
      }
    },
    computed: {
      userInfo () {
        // console.log(this.bookInfo.user_info)
        return this.bookInfo.user_info || {}
      }
    },
    watch: {
      bookInfo () {
        // console.log('bookInfo', this.bookInfo)
      }
    }
  }
</script>

<style scoped lang="less">
  .book-info {
    font-size: 14px;
  }
  .thumb {
    width: 750rpx;
    height: 500rpx;
    position: relative;
    overflow: hidden;
    .backImage {
      width: 100%;
      filter: blur(10px);
    }
    .img {
      position: absolute;
      top: 50rpx;
      width: 100%;
      height: 300rpx;
      left: 0;
    }
    .info {
      width: 100%;
      position: absolute;
      top: 360rpx;
      left: 0;
      text-align: center;
      color: #fff;
      .author {
        font-size: 14px;
      }
      .title {
        font-size: 22px;
      }
    }
  }
  .detail {
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .right {
      /*float: right;*/
      display: inline-block;
    }
  }
  .avatar {
    width: 40rpx;
    height: 40rpx;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
  }
  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: space-between;
    align-items: center;
    .badage {
      display: inline-block;
      text-align: center;
      color: #EA5A49;
      padding: 5px;
      margin: 5px;
      border: 1px solid #EA5A49;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
    }
  }
  .summary {
    padding: 10px 15px;
    font-size: 16px;
    p {
      text-indent: 2em;
      color: #666;
      font-size: 14px;
    }
  }
</style>
