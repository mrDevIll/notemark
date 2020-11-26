<template>
    <div class="menu-selected" v-show="note.show" v-bind:style="{top:note.top, left:note.left}">
       
        <font-awesome-icon :icon="copyIcon" class="menu-selected-icon menu-selected-icon-copy" />
        <font-awesome-icon :icon="plusCircle" class="menu-selected-icon menu-selected-icon-plus" />
        <font-awesome-icon :icon="editIcon" class="menu-selected-icon menu-selected-icon-edit" />
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
            note: {show: false, left: 0, top: 0},
            

        }
    },
    components: {
        FontAwesomeIcon
    },
    computed: {

    },

    mounted:function() {
        startApp(this.note)
    }


}

function startApp(note) {
        const noteLocal = note;
        let textSelected;

        document.body.addEventListener('mouseup', function (e) {

            textSelected = window.getSelection();
            if (textSelected.toString().length > 0) {
                let website = document.location.href;
                let title = document.getElementsByTagName('title')[0].innerText;
                const data = textSelected.toString();
                let evt = e;
                note.show = true;
               // chrome.runtime.sendMessage({ "textMessage": { title, website, data } });
                note.left= evt.pageX - 45 + "px";
                note.top= evt.pageY - 35 +"px";
            }
            else
                false;

        }, false);

        
    }




</script>

<style scoped>
.menu-selected {
  position: absolute;

  
  padding: 0.5rem;
  background-color: gray;
  border-radius: 5%;

  z-index: 10000;
}
.menu-selected-icon {
  margin-left: 0.3rem;
}
.menu-selected-icon:hover {
  color: blue;
  transform: scale(1.3);
}
</style>


