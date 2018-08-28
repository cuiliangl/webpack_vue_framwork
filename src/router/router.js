/**
 * @file 路由管理
 * @author cuiliangliang
 * @since 2018/08/27
 */

export default [
    {
        path: '/',
        name: 'HelloWorld',
        // component: HelloWorld
        component(resolve) {
          require(['@/views/HelloWorld'], resolve);
        },
        meta: {
          title: '首页'
        }
    }
]
