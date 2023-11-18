import { createRouter, createWebHashHistory } from 'vue-router'
// import routes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 重定向方案
// router.beforeEach((to, from, next) => {
//   if (to.path == '/home') {
//     next('/')
//   }
//   next()
// })
export default router
