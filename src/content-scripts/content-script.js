import Vue from 'vue';
import OnSelectedMenu from '../components/OnSelectedMenu.vue'
import { initExtension } from '../utility/generalConfig.js';

Vue.config.productionTip = false

initExtension()
new Vue({
    render: h => h(OnSelectedMenu),
}).$mount('#notemark-container')




