<template>
  <div class="navbar-box">
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <img src="~/static/images/logo.png">
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">首页</div>
        <div class="level-item">新品</div>
        <div class="level-item">活动</div>
        <div class="level-item">关于</div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavbarCom',
  props: {
  },
  data () {
    return {
    };
  },
  created () {
  },
  mounted () {
    // window.addEventListener('scroll', () => {
    //   if (this.showMenu) {
    //     this.showMenu = false;
    //   }
    // });
  },
  methods: {
    // 返回上一页
    backFn () {
      this.$router.back(-1);
    },
    // 显示菜单
    showMenuFn () {
      this.showMenu = !this.showMenu;
    },
    // 返回首页
    toHomeFn () {
      this.$router.push('/');
      var timer = setInterval(function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
        this.isTop = true;
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 30);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
