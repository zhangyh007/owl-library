<template>
  <div class="swiper">
    <swiper
      indicator-dots="true"
      indicator-active-color="#EA5149"
      autoplay="true"
      interval="3000"
      duration="500"
      circular="true">
      <div v-for="(top, imgIndex) in imgChunk" :key="imgIndex">
        <swiper-item>
          <img
            class="slide-image"
            v-for="img in top"
            :key="img.id"
            mode="aspectFit"
            :src="img.image"
            :alt="img.title"
            @click="goDetail(img.id)">
        </swiper-item>
      </div>

    </swiper>
  </div>
</template>

<script>
  import lodash from 'lodash'
  export default {
    name: 'TopSwiper',
    props: {
      topList: {
        type: Array,
        required: true
      }
    },
    methods: {
      goDetail (id) {
        wx.navigateTo({
          url: '/pages/detail/main?id=' + id
        })
      }
    },
    computed: {
      imgChunk () {
        // console.log(lodash.chunk(this.topList, 3))
        return lodash.chunk(this.topList, 3)
      }
    }
  }
</script>

<style scoped lang="less">
  .swiper {
    margin-top: 5px;
    .slide-image {
      width: 33%;
      height: 250rpx;
    }
  }
</style>
