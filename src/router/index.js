import Vue from 'vue'
import Router from 'vue-router'
import routes from './router';

Vue.use(Router)

const router =  new Router({
  routes
});


// 全局导航守卫
router.beforeEach((to, from ,next) => {
  document.title = to.meta.title;

  next();
})

export default router;
