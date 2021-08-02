<template>
  <div class="footer-box">
    底部
  </div>
</template>

<script>
export default {
  props: {
  },
  data () {
    return {
    };
  },
  methods: {
    // 路由跳转
    toFn (url) {
      // if (url !== 'down') {
      this.$router.push({
        path: url
      });
      // } else {
      //   window.location.href = 'http://m.zhaodazhuang.com/down.html';
      // }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
