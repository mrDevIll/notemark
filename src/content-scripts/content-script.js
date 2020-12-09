import Vue from 'vue';
import OnSelectedMenu from '../components/OnSelectedMenu.vue'
import { initExtension } from './initExtension';


initExtension()
Vue.config.productionTip = false

new Vue({
    render: h => h(OnSelectedMenu),
}).$mount('#noteMarkDiv')

