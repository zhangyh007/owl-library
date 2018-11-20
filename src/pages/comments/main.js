import Vue from 'vue'
import Comments from './Comments'

const app = new Vue(Comments)
app.$mount()
export default {
  config: {
    enablePullDownRefresh: true,
    backgroundTextStyle: 'dark',
    backgroundColor: '#dadada',
    navigationBarTitleText: '评论列表'
  }
}
