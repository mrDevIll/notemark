import Vue from 'vue';
import OnSelectedMenu from '../components/OnSelectedMenu.vue'
import { initExtension } from '../utility/generalConfig.js';


initExtension()
Vue.config.productionTip = false

new Vue({
    render: h => h(OnSelectedMenu),
}).$mount('#notemark-container')

