<template>

<div >
    <div v-for="item in items" :key="item.id">
        <!-- TODO: add a flag to stop new pop up once the menu is active -->
        <ContextPopupMenu :note="item" v-on:menuOff="updateItems" /> 
    </div>
    
    
</div>
</template>

<script>

import ContextPopupMenu from './ContextPopupMenu';
import { nameChromeStorage } from '../utility/initEnv.js';

export default {
    name: "ContextPopup",
    data() {
        return {
            selectedObject: { count: 0, show: false },
            items: [],



        }
    },
    components: {
        ContextPopupMenu,
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

    }


}

function addListenerToPageContent(element) {
    const el = element;
    console.log("addevent listener")
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






</script>


