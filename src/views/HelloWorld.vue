<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="less-test"></div>
  </div>
</template>

<script>

/**
 * @file helloWorld
 * @author cuiliangliang
 * @since 2018/08/27
 */

import {mapState} from 'vuex';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.helloWorld.userInfo
    })
  },
  created() {
    this.$store.dispatch('getUserInfo');
  }
}
</script>

<style scoped lang="less">

// 使用相对路径
@import '../assets/common.less';

.hello {
  h1, h2 {
    font-weight: normal;
    font-size: 34px;
    color: @fontColor;
  }

  .less-test {
    width: 200px;
    height: 200px;
    background-color: skyblue;
  }
}


</style>
