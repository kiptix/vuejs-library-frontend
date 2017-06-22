import Vue from 'vue'
import Router from 'vue-router'
import BookList from '@/components/BookList'
import NewBook from '@/components/NewBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: "bookList",
      component: BookList
    },
    {
      path: '/bookList',
      name: "bookList",
      component: BookList
    },
    {
      path: '/newBook',
      name: 'newBook',
      component: NewBook
    }
  ]
})
