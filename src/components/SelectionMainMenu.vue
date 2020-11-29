<template>
    <div class="mini-menu-selected"  v-bind:style="{top:top, left:left}">
        <font-awesome-icon :icon="copyIcon" class="mini-menu-selected-icon mini-menu-selected-icon-copy" v-on:click="copyMessage" title="copy"/>
        <font-awesome-icon :icon="plusCircle" class="mini-menu-selected-icon mini-menu-selected-icon-plus"  title="add to your notes"/> 
        <!-- <font-awesome-icon :icon="editIcon" class="mini-menu-selected-icon mini-menu-selected-icon-edit" /> -->
      {{note.id}}
    </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlusCircle, faEdit, faCopy } from '@fortawesome/free-solid-svg-icons';

export default {
  name: "SelectionMainMenu",
  props: ['note'],
  data: function () {
    return {
      plusCircle: faPlusCircle, copyIcon: faCopy,


    }
  },
  methods: {
    copyMessage() {
      try {
        console.log(this.note)
        navigator.clipboard.writeText(this.note.data);
        // this.note.show = false;
      } catch (e) {
        console.log("error copying the data: " + e)
      }
    },

    // takeNote() {
    //     this.notesTaken.push(this.miniMenuController.message);
    //     console.log(this.notesTaken);
    //     this.miniMenuController.show = false;
    //     // setStorageChromeAPI({ "note": msg })

    //     // chrome.storage.sync.get(['note'], function (result) {
    //     //     console.log(' Value currently is :' + result.note);
    //     // });



    // }
  },
  computed: {
    top: function () {
      return `${this.note.position.top - 45}px`;
    },
    left: function () {
      return `${this.note.position.left - 45}px`
    }
  },

  components: {
    FontAwesomeIcon
  }

}
</script>
<style scoped>
.mini-menu-selected {
  position: absolute;

  padding: 0.4rem 0.8rem;
  background-color: #111827;
  border-radius: 5%;

  z-index: 10000;
}
.mini-menu-selected-icon {
  color: white;
}
.mini-menu-selected-icon:first-child {
  margin-right: 1rem;
}
.mini-menu-selected-icon:hover {
  color: #6ee7b7;
  transform: scale(1.3);
}
</style>
