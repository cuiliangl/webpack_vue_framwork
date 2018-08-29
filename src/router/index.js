/**
 * @file router
 * @author cuiliangliang
 * @since 2018/08/28
 */

import Vue from 'vue'
import Router from 'vue-router'
import routes from './router';

Vue.use(Router);

const router =  new Router({
  routes
});


// 全局导航守卫
router.beforeEach(({meta: {title = ''}}, from ,next) => {
  document.title = title;

  next();
});

export default router;
