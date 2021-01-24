<template>

<div >
        
    <div v-for="item in items.notes" :key="item.id" >
        <!-- TODO: add a flag to stop new pop up once the menu is active -->
        <ContextPopupMenu :note="item" v-on:menuOff="updateItems" /> 

    </div>
        
    
    
</div>
</template>

<script>

import ContextPopupMenu from './ContextPopupMenu';
import { nameChromeStorage } from '../utility/initEnv.js';
import { addListenerToPageContent } from '../utility/listener.js';
import { getStatus } from '../utility/manageStatus';

export default {
    name: "ContextPopup",
    data() {
        return {
            items: { active: true, notes: [] },


        }
    },
    computed: {

    },

    components: {
        ContextPopupMenu
    },
    methods: {
        updateItems: function (e) {
            this.items.notes.pop();
            addListenerToPageContent(this.items);
        },

    },

    mounted: function () {

        addListenerToPageContent(this.items);

    }


}





</script>

<style>
.shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

