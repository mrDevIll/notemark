<template>
  <div id="app">
    <MenuBar :itemSize="itemSize"/>
    
    <div v-if="items.length" class="app-container" id="notemark-note">
                  <Clipboard v-for="(item,key) in items" :key="key"  :nodes="item" v-on:deleteNote="deleteItem" />
     
         <footer-bar />    
     </div>
     <div v-else class="app-container center">
       
       ------enable and select some text to add notes------
       
       </div>
   
       
  </div>
</template>

<script>
import { nameChromeStorage } from '../utility/initEnv.js';
import { deleteNode, deleteAllNode } from '../utility/manageMessage.js'
import Clipboard from './Clipboard';
import MenuBar from '../components/MenuBar';
import FooterBar from '../components/FooterBar'


export default {
  name: "App",
  data() {
    return {
      items: [],
    }
  },
  components: {
    Clipboard, MenuBar, FooterBar

  },
  methods: {
    deleteItem: function (e) {
      if (this.items.length === 1) {
        deleteNode(e);
        location.reload(true);
      }
      if (this.items.length > 1) {
        deleteNode(e);
      }
    },

  },

  computed: {
    itemSize: function () {
      return this.items.length || 0;
    }
  },
  mounted: function () {
    populateSideMenu(this.items);
    keepUpdatedSideMenu(this.items);


  }


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

    }
  });
}


</script>

<style>
.app-container {
  font-family: Georgia, Times, serif;
  width: 460px;
  margin-top: 4.3rem;
  margin-bottom: 5rem;
}
.icons {
  vertical-align: middle;
  height: 0.8rem;
}
.delete-icon {
  color: red;
  padding: 0 0.2rem;
}
.cliccable {
  cursor: pointer;
}
.cliccable:active {
  color: gray;
}

.cliccable:hover {
  transform: scale(1.1);
}
.shadow {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19);
}
.center {
  text-align: center;
}
</style>
