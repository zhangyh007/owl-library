import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
const app = new Vue(App)
app.$mount()

export default {
  page: [
    '^pages/me/main',
    'pages/books/main',
    'pages/comments/main'
  ],
  config: {
    'window': {
      'backgroundTextStyle': 'light',
      'navigationBarBackgroundColor': '#EA5149',
      'navigationBarTitleText': '猫头鹰图书室',
      'navigationBarTextStyle': 'light'
    },
    'tabBar': {
      selectedColor: '#EA5149',
      list: [
        {
          pagePath: 'pages/books/main',
          text: '图书',
          iconPath: 'static/img/book.png',
          selectedIconPath: 'static/img/book-active.png'
        },
        {
          pagePath: 'pages/comments/main',
          text: '评论',
          iconPath: 'static/img/todo.png',
          selectedIconPath: 'static/img/todo-active.png'
        },
        {
          pagePath: 'pages/me/main',
          text: '个人中心',
          iconPath: 'static/img/me.png',
          selectedIconPath: 'static/img/me-active.png'
        }
      ]
    }
  }
}
