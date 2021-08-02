<template>
  <div class="container">
    <navbar-com />
    <master-com>
      <div slot="content"
           class="main-box">
        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">2</div>
          <div class="column">3</div>
          <div class="column">4</div>
        </div>
      </div>
      555
    </master-com>
  </div>
</template>

<script>
import { getList } from '~/assets/api/api';
export default {
  transition: 'slide-bottom',
  // asyncData之后执行，store数据加载，操作store
  fetch () {
    // console.log('fetch has called.');
  },
  // 异步数据处理
  // 获取页面服务端渲染的数据
  asyncData ({ app, query }) {
    // ctx.app    根实例
    // ctx.route  路由实例
    // ctx.params 路由参数
    // ctx.query  路由问号后面的参数
    // ctx.error  错误处理方法

    // 尽量使用try catch的写法，将所有异常都捕捉到
    // try {
    //   throw new Error()
    // } catch {
    //   // 跳转到默认的错误页，错误页面可以通过/layout/error.vue自定义
    //   ctx.error({ statusCode: 500, message: '服务器开小差了~' })
    // }

    // return app.$axios.$post('zdzWebsite/OfficialWebsite/getProvince').then(res => {
    //   return { list: res.content };
    // });
    // return getList(app.$axios, {
    //   a: 2
    // }).then(res => {
    //   return { list: res.content };
    // });
  },
  data () {
    return {
    };
  },
  // 服务端和客户端都会执行
  beforeCreate () {
  },
  // 服务端和客户端都会执行
  created () {
    // console.log(this.$store);
  },
  beforeMount () {
  },
  // 挂载结束状态，客户端
  mounted () {
    // this.$hello('mounted');
    // this.$store.commit('changeHelloValue', '修改hello');
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start();
    //   setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    // });
  },
  methods: {
    getProvinceFn () {
      getList(this.$axios, {
        a: 1
      }).then(res => {
        this.list = [
          { name: '点击后的数据' }
        ];
      });
    },
    // 跳转
    toSkipFn () {
      // 由于动态路由也是传递params的，所以在 this.$router.push() 方法中 path不能和params一起使用，否则params将无效。需要用name来指定页面
      // this.$router.push('/user/id')
      this.$router.push({
        path: 'about',
        query: { key: 12 },
        params: { key: 12 }
      });
      // 新标签页打开
      // let newpage = this.$router.resolve({
      //   path: '/user/id',
      //   query:{
      //     key: 12
      //   }
      // })
      // window.open(newpage.href, '_blank');
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
