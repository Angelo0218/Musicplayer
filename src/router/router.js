import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { name: '登入', path: '/', component: () => import('../pages/Home.vue')},
    { name: '首頁', path: '/login', component: () => import('../pages/Login.vue')}  
  ]
// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes //路由表
})
export default router