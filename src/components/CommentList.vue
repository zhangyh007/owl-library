<template>
  <div class="comment-list" :style="color ? '' : {'padding-top': '10px'}">
    <div class="page-title">
      我的评论
    </div>
    <div
      class="comment"
      v-for="(comment, index) in commentList"
      :key="index"
      @click="handleClick(comment)">
      <div class="info">
        <div class="user">
          <img class="avatar" :src="comment.user_info.image" mode="aspectFit">
          {{comment.user_info.nickName}}
        </div>
        <div class="right">
          {{comment.location || '未知地点'}}
          <span class="color-primary">--</span>
          {{comment.phone || '未知'}}
        </div>
      </div>
      <div class="content">
        {{comment.comment}}
      </div>
    </div>
    <p class="notice" v-if="commentList.length === 0">你还没留下金言，快去评论吧-_-</p>
  </div>
</template>

<script>
  export default {
    name: 'CommentList',
    props: {
      commentList: {
        type: Array,
        default: []
      },
      type: {
        type: String,
        default: ''
      },
      color: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      handleClick (comment) {
        if (this.type === 'user') {
          wx.navigateTo({
            url: '/pages/detail/main?id=' + comment.bookId
          })
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .avatar {
    width: 40rpx;
    height: 40rpx;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
  }
  .comment-list {
    background: #eaeaea;
    padding: 0 0 20px 0;
    .page-title {
      font-size: 18px;
      color: #fff;
      background: #EA5A49;
      padding: 10px 10px;
    }
    .comment {
      margin: 0 10px;
      background: #fff;
      font-size: 14px;
      -webkit-border-radius: 8px;
      -moz-border-radius: 8px;
      border-radius: 8px;
      .info {
        margin-top: 10px;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .user {
        display: inline-block;
      }
      .content {
        padding: 10px;
        color: #333;
      }
    }
    .notice {
      margin: 10px;
      margin-bottom: 0;
      background: #fff;
      font-size: 14px;
      -webkit-border-radius: 8px;
      -moz-border-radius: 8px;
      border-radius: 8px;
      padding: 10px;
      color: #333;
    }
  }

</style>
