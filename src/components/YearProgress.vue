<template>
  <div class="year-progress">
    <progress :percent="getPercent" activeColor="#EA5A49" active="true" show-info="true"></progress>
    <p class="progress-word">{{year}}年已经过去了{{days}}天，{{getPercent}}%，还剩{{getRestDays}}天</p>
    <p class="notice">温馨提示：<span style="color: #aaa;">{{notice}}</span></p>
  </div>
</template>

<script>
  export default {
    name: 'YearProgress',
    computed: {
      isLeadYear () { // 判断闰年
        let today = new Date()
        if (today % 400 === 0) {
          return true
        } else if (today % 4 === 0 && today % 100 !== 0) {
          return true
        } else {
          return false
        }
      },
      getDaysofYear () { // 得到今年的天数
        return this.isLeadYear ? 366 : 365
      },
      getRestDays () { // 得到今年剩下的天数
        return this.getDaysofYear - this.days
      },
      getPercent () { // 得到百分比
        return (this.days / this.getDaysofYear * 100).toFixed(1)
      },
      year () { // 得到年数
        return new Date().getFullYear()
      },
      days () { // 得到今年已经过去的天数
        let start = new Date()
        // 今年第一天
        start.setMonth(0)
        start.setDate(1)
        // 现在的时间戳-今年的第一天的时间戳
        let offset = new Date().getTime() - start.getTime()
        return parseInt(offset / (1000 * 3600 * 24) + 1)
      },
      notice () {
        if (this.getPercent < 25 && this.getPercent >= 0) {
          return '不要以为一年才开始，不到四分之一，就懈怠，读书吧！'
        } else if (this.getPercent >= 25 && this.getPercent < 50) {
          return '现在已经过了四分之一，赶紧读书吧！'
        } else if (this.getPercent >= 50 && this.getPercent < 75) {
          return '今年已经过了一半了，还在等什么，抓紧读书吧！'
        } else {
          return '今年没剩下多少天了，冲刺吧！超额完成读书计划。'
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .year-progress {
    width: 100%;
    .progress-word {
      font-size: 16px;
    }
    .notice {
      font-size: 14px;
      color: #EA5A49;
      margin-top: 20px;
    }
  }
</style>
