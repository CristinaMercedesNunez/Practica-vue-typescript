import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import Vue from 'vue/types'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
    router,
    render: h = h(App)
}).$mount('#app')
