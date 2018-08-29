<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import {api} from 'api';

export default {
  name: 'App',
  async created() {

    // 两种方式都可以发送请求，$http为实例属性，api需要在每一个使用到的组件中单独导入
    // this.$http.getList();
    // let data = await api.getList();

    // do something...
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
