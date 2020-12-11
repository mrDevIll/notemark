<template>

<div>
    <!-- //TODO: understand why it returns only one element -->
     
     <div v-if="sideItems.length" class="notemark-side-menu">
             <SelectedSideMenu v-for="(item,key) in sideItems" :key="key"  :nodes="item"/>
      </div>


    <div v-for="item in items" :key="item.id">
        
        <SelectionMainMenu :note="item" v-on:menuOff="updateItems" /> 
    </div>
    
    
</div>
</template>

<script>

import SelectionMainMenu from '../components/SelectionMainMenu';
import SelectedSideMenu from '../components/SelectedSideMenu';
import { nameChromeStorage } from '../utility/generalConfig.js'
export default {
    name: "OnSelectedMenu",
    data() {
        return {
            selectedObject: { count: 0, show: false },
            items: [],
            sideItems: []


        }
    },
    components: {
        SelectionMainMenu, SelectedSideMenu
    },
    computed: {

    },
    methods: {
        updateItems: function (e) {
            this.items.pop();


        }
    },

    mounted: function () {
        addListenerToPageContent(this.items);
        populateSideMenu(this.sideItems);
        keepUpdatedSideMenu(this.sideItems);
    }


}

function addListenerToPageContent(element) {
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

function populateSideMenu(items) {
    const uploadedItems = items;
    chrome.storage.sync.get(nameChromeStorage, function (res) {
        const r = res[nameChromeStorage];


        for (let k in r) {
            uploadedItems.push({ [k]: r[k] })
        }


    });
}

function keepUpdatedSideMenu(items) {
    const uploadedItems = items;
    chrome.storage.onChanged.addListener(function (changes) {
        const obj = changes[nameChromeStorage];
        if (obj) {
            uploadedItems.length = 0;
            for (let k in obj.newValue) {
                uploadedItems.push({ [k]: obj.newValue[k] })

            }
            console.log(uploadedItems)
        }
    });
}


</script>

<style>
#notemark-container {
  padding: 0;
  margin: 0;

  color: black;
  background-color: skyblue;
}
</style>


