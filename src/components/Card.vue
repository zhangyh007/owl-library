<template>
  <a class="card" :href="detailUrl">
    <div class="book-card">
      <div class="musk">
        <img
          :src="book.image"
          :alt="book.title"
          mode="aspectFit"
          lazy-load="true"
          @click.stop="previewImg">
      </div>
      <div class="detail">
        <div class="row">
          <p class="color-primary">
            <span class="text">书名：</span>
            {{book.title}}
          </p>
          <p class="color-primary" style="position: relative;">
            <span class="text">
              评分：
            </span>
            {{book.rate}}
            <span style="position: absolute;right: 0;">
              <Rate :rate="book.rate"></Rate>
            </span>

          </p>
          <p class="color-primary">
            <span class="text">浏览量：</span>
            {{book.count}}
          </p>
          <p>
            <span class="text">作者：</span>
            {{book.author}}
          </p>
          <p>
            <span class="text">出版社：</span>
            {{book.publisher}}
          </p>
          <p>
            <span class="text">添加人：</span>
            {{book.user_info.nickName}}
          </p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
  import Rate from '@/components/Rate'
  export default {
    name: 'Card',
    components: {
      Rate
    },
    props: {
      book: {
        type: Object
      }
    },
    methods: {
      previewImg () { // 预览图片
        wx.previewImage({
          current: this.book.image, // 当前显示图片的http链接
          urls: [this.book.image] // 需要预览的图片http链接列表
        })
      }
    },
    computed: {
      detailUrl () {
        return '/pages/detail/main?id=' + this.book.id
      }
    }
  }
</script>

<style scoped lang="less">
  .card {
    padding: 10px 5px;
    border-top: 1px solid #f1f1fa;
  }
  .book-card {
    font-size: 14px;
    display: flex;
    .musk {
      width: 100px;
      height: 120px;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
  .detail {
    width: 100%;
    padding-right: 10px;
    .text {
      width: 120rpx;
      display: inline-block;
      color: #666;
    }
  }
</style>
