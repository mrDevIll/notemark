<template>
  <div id="app">
    <div >

      <h2>Notemarks

      </h2>
    <hr>
    <!-- <div>
      <ToggleButton />
    </div> -->
    <div v-if="items.length" class="app-container" id="notemark-note">
      <h4>{{itemSize}} note{{itemSize == 1? "" : "s"}}</h4>
             <PopupMenu v-for="(item,key) in items" :key="key"  :nodes="item" v-on:deleteNote="deleteItem" />
     <PrintButton />
     </div>
     <div v-else class="app-container">
             <h4> 0 notes</h4>
     </div>
      
    </div>
       
  </div>
</template>

<script>
import PopupMenu from './PopupMenu';
import ToggleButton from '../components/ToggleButton';
import { nameChromeStorage } from '../utility/initEnv.js';
import { deleteNode } from '../utility/manageMessage.js'
import PrintButton from '../components/PrintButton';

export default {
  name: "App",
  data() {
    return {
      items: [],
    }
  },
  components: {
    PopupMenu, ToggleButton, PrintButton

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
    }
  },

  computed: {
    itemSize: function () {
      return this.items.length;
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

function updateBadge(text) {
  chrome.browserAction.setBadgeText(text);
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
  width: 460px;
  padding: 0.5rem 1rem;
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

.cliccable:hover {
  transform: scale(1.2);
}
</style>
