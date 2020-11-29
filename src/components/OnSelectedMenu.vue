<template>

<div>

    <SelectionMainMenu v-if="selectedObject.show" :key="selectedObject.id" :note="selectedObject.note" /> 
    
    
</div>
</template>

<script>

import SelectionMainMenu from '../components/SelectionMainMenu';

export default {
    name: "OnSelectedMenu",
    data() {
        return {
            selectedObject: { count: 0, show: false },




        }
    },
    components: {
        SelectionMainMenu
    },
    methods: {
        handleSelectionMenu: function (e) {

        }
    },

    mounted: function () {
        startApp(this.selectedObject)
    }


}

function startApp(element) {
    const el = element;
    let textSelected;

    document.body.addEventListener('mouseup', function (e) {

        textSelected = window.getSelection();
        if (textSelected.toString().length > 0) {
            let website = document.location.href;
            let title = document.getElementsByTagName('title')[0].innerText;
            const data = textSelected.toString();
            let evt = e;
            let position = { left: evt.pageX, top: evt.pageY };
            let id = el.count + title.split(" ")[0];
            el.count++;
            el.note = { id, title, website, data, position };
            el.show = true;

            // chrome.runtime.sendMessage({ "textMessage": { title, website, data } });

        }
        else
            false;

    }, false);


}

function setStorageChromeAPI(obj) {

    chrome.storage.sync.set(obj, function () {
        console.log(obj);
    });
}


</script>

<style scoped>
</style>


