import Vue from 'vue';
import ContextPopup from './ContextPopup.vue'
import { initExtension } from '../utility/initEnv.js';

Vue.config.productionTip = false

initExtension()
new Vue({
    render: h => h(ContextPopup),
}).$mount('#notemark-container')




