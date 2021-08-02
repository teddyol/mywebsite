<template>
  <div id="app-container">
    <nuxt-link to="/">返回首页</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'About',
  transition: 'bounce',
  asyncData ({ app, query }) {

  },
  data () {
    return {};
  },
  // 计算属性
  computed: {},
  // 监听器
  watch: {},
  // 页面组件渲染完成钩子
  created () {
  },
  mounted () {
  },
  // 方法集合
  methods: {},
  head () {
    return {
      title: '页面自定义',
      meta: [
        { name: 'keywords', content: '页面自定义' },
        { name: 'description', content: '页面自定义' }
      ]
    };
  }
};
</script>

<style scoped>
#app-container {
  padding: 70px 0;
}
</style>
