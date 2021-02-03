import Vue from 'vue';
import Menu from './Menu.vue'
import { initExtension, idVueApp } from '../utility/initEnv.js';



Vue.config.productionTip = false

initExtension()
new Vue({
    render: h => h(Menu),
}).$mount(`#${idVueApp}`)




