export default {
  head: {
    title: '找大状',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' },
      { name: 'keywords', content: '企业法务、企业法律顾问、法律服务、合同纠纷、合约优化、劳资纠纷、劳动争议、催收欠款、债务纠纷、企业股权、股权激励、知识产权、找律师、打官司' },
      { hid: 'description', name: 'description', content: '一个专业做法律服务的平台，为企业提供劳资整改、合约规范、企业股权、催收欠款、知识产权、增值服务一站式的法律服务，从根本上帮助企业远离法律风险。' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-tap-highlight', content: 'no' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' }
    ],
    link: [ // 若引入css不会进行打包处理
      { rel: 'SHORTCUT ICON', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#FF5355' }, // 页面进度条
  css: [
    'normalize.css/normalize.css',
    'bulma/css/bulma.min.css',
    '@/assets/css/common.scss'
  ],
  /*
  ** 插件
  */
  plugins: [
    { src: '~/plugins/axios' },
    { src: '~/plugins/hello' } // 默认都执行
    // { src: '~/plugins/hello', mode: 'client' } 仅客户端有效
    // { src: '~/plugins/hello', mode: 'server' } 仅服务端有效
  ],
  router: {
    base: process.env.NODE_ENV === 'production' ? '/' : '/',
    resourceHints: false,
    prefetchLinks: false // 解决首屏加载全部js
  },
  generate: {
    dir: process.env.SITE_ENV === 'prod' ? 'dist/prod' : 'dist/dev'
  },
  // axios配置
  axios: {
    proxy: true,
    prefix: '/api',
    credentials: true,
    baseURL: process.env.SITE_ENV === 'prod' ? 'http://wftp.zhaodazhuang.com:8061' : 'http://wftp.zhaodazhuang.com:8061',
    retry: { retries: 3 } // 自动拦截失败的请求 重试次数
  },
  // 配置代理
  proxy: {
    '/api': {
      target: 'http://wftp.zhaodazhuang.com:8061',
      changeOrigin: true,
      secure: false,
      pathRewrite: { '^/api': '' }
    },
    '/app': {
      target: 'http://wftp.zhaodazhuang.com:8061',
      changeOrigin: true,
      secure: false,
      pathRewrite: { '^/app': '' }
    }
  },
  // 自动引入组件，不需要import
  components: true,
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  build: {
    // extend (config, ctx) {
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     });
    //   }
    // }
  }
};
