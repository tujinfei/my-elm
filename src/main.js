import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//全局按需引入vant组件
import '@/plugins/vant'

//导入样式
// import '@/styles/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
