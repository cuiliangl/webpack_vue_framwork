# webpack + vue + vue-router + vuex + axios + less + px2rem

> A Vue.js project Framwork

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### 项目架构


├── api
│   ├── apiList.js
│   |── option.js
│   └── index.js
├── assets
│   ├── font
│   ├── image
│   ├── js
│   └── less
├── components
│   ├── local
│   └── global
├── filter
│   └── index.js
├── mixin
│   └── index.js
├── router
│   ├── router.js
│   └── index.js
├── store
│   ├── index.js
│   ├── modules
│   └── mutations.js
├── views
│   └── HelloWorld
├── App.vue
├── main.js
└── ui.js 

### 采用MVVM模式：

1. views目录为视图层
2. components为组件，local局部组件，global为全局组件
3. store为model层，所有异步请求和数据均由store管理
4. 请求可使用async/await、亦可使用then/catch方式

* api下的option为请求全局配置，包括拦截器、环境配置、baseUrL、timeout、loading等，并提供了两种请求方式GET和POST，如有别的需求可自行扩展。
* apiList为请求配置。

* store为数据层，module按views划分。

* ui.js为所有样式入口

* 样式使用less，自动编译转rem

#### author: cuiliangliang

#### since: 2018/08/29

