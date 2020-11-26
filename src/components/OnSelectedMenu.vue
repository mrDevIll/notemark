<template>
    <div class="menu-selected" v-show="note.show" v-bind:style="{top:note.top, left:note.left}">
       
        <font-awesome-icon :icon="copyIcon" class="menu-selected-icon menu-selected-icon-copy" v-on:click="copyMessage" title="copy"/>
        <font-awesome-icon :icon="plusCircle" class="menu-selected-icon menu-selected-icon-plus" title="add note"/>
        <!-- <font-awesome-icon :icon="editIcon" class="menu-selected-icon menu-selected-icon-edit" /> -->

       
    </div>

</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlusCircle, faEdit, faCopy } from '@fortawesome/free-solid-svg-icons'


export default {
    name: "OnSelectedMenu",
    data() {
        return {
            plusCircle: faPlusCircle,
            editIcon: faEdit,
            copyIcon: faCopy,
            note: { show: false, left: 0, top: 0, message: {} },


        }
    },
    components: {
        FontAwesomeIcon
    },
    methods: {
        copyMessage() {
            try {
                navigator.clipboard.writeText(this.note.message.data);
            } catch (e) {
                console.log("error copying the data: " + e)
            }
        }
    },

    mounted: function () {
        startApp(this.note)
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
            el.show = true;
            el.message = { title, website, data }
            // chrome.runtime.sendMessage({ "textMessage": { title, website, data } });
            el.left = evt.pageX - 45 + "px";
            el.top = evt.pageY - 35 + "px";
        }
        else
            false;

    }, false);


}




</script>

<style scoped>
.menu-selected {
  position: absolute;

  padding: 0.4rem 0.8rem;
  background-color: #111827;
  border-radius: 5%;

  z-index: 10000;
}
.menu-selected-icon {
  color: white;
}
.menu-selected-icon:first-child {
  margin-right: 1rem;
}
.menu-selected-icon:hover {
  color: #6ee7b7;
  transform: scale(1.3);
}
</style>


