<template>
  <div class="rate">
    <span class="star">
      ☆☆☆☆☆
      <div class="cover" :style="width">
        ★★★★★
      </div>
    </span>

  </div>
</template>

<script>
  export default {
    name: 'Rate',
    props: {
      rate: {
        type: [Number, String],
        default: 0
      }
    },
    computed: {
      width () {
        return `width: ${this.rate * 10}%`
      }
    }
  }
</script>

<style scoped lang="less">
  .rate {
    font-size: 14px;
    /*display: inline-block;*/
    position: relative;
    .star {
      font-size: 14px;
      display: block;
    }
    .cover {
      display: block;
      overflow: hidden;
      width: 0;
      position: absolute;
      top: 0;
      left: 0;
      font-size: 14px;
    }
  }
</style>
