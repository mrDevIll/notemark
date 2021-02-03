<template>

<div >
        
    <div v-for="item in items.notes" :key="item.id" >
        <MenuItems :note="item" v-on:menuOff="updateItems" /> 
    </div>
        
    
    
</div>
</template>

<script>

import MenuItems from './MenuItems';
import { nameChromeStorage } from '../utility/initEnv.js';
import { addListenerToPageContent } from '../utility/listener.js';
import { getStatus } from '../utility/manageStatus';

export default {
    name: "Menu",
    data() {
        return {
            items: { active: true, notes: [] },


        }
    },
    components: {
        MenuItems
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


