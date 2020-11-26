import Vue from 'vue';
import ContextSideContent from '../components/ContextSideContainer.vue';
import OnSelectedMenu from '../components/OnSelectedMenu.vue'


initExtension()
Vue.config.productionTip = false

new Vue({
    render: h => h(OnSelectedMenu),
}).$mount('#noteMarkDiv')

function initExtension() {
    const bodyTag = window.document.getElementsByTagName("body");
    const vueDivContainer = document.createElement("div");
    vueDivContainer.id = "noteMarkDiv";
    bodyTag[0].insertBefore(vueDivContainer, bodyTag[0].firstChild);
    console.log(bodyTag[0])
}