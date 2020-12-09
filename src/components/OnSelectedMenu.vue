<template>

<div>
    <!-- <SelectedSideMenu /> -->
    
    <div v-for="item in items" :key="item.id">
        
        <SelectionMainMenu :note="item" v-on:menuOff="updateItems" /> 
    </div>
    
    
</div>
</template>

<script>

import SelectionMainMenu from '../components/SelectionMainMenu';
import SelectedSideMenu from '../components/SelectedSideMenu';
export default {
    name: "OnSelectedMenu",
    data() {
        return {
            selectedObject: { count: 0, show: false },
            items: []



        }
    },
    components: {
        SelectionMainMenu, SelectedSideMenu
    },
    methods: {
        updateItems: function (e) {
            console.log(e)
            this.items.pop()
        }
    },

    mounted: function () {

        startApp(this.items)
    }


}

function startApp(element) {
    const el = element;

    document.body.addEventListener('mouseup', function (e) {

        let textSelected = window.getSelection();

        if (textSelected.toString().trim().length > 0) {
            let website = document.location.href;
            let title = document.getElementsByTagName('title')[0].innerText;
            const text = textSelected.toString();
            let evt = e;
            let position = { left: evt.pageX, top: evt.pageY };

            let id = element.length + text.split(" ")[0] + position.left;
            el.push({ id, title, website, text, position })
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


