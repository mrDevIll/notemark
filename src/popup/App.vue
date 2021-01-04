<template>
  <div id="app">
   <h3>test</h3>
    <div v-if="items.length">
             <SelectedSideMenu v-for="(item,key) in items" :key="key"  :nodes="item"/>
      </div>
       
  </div>
</template>

<script>
import SelectedSideMenu from '../components/SelectedSideMenu';
import { nameChromeStorage } from '../utility/generalConfig.js'

export default {
  name: "App",
  data() {
    return {
      items: []
    }
  },
  components: {
    SelectedSideMenu

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
      console.log(uploadedItems)
    }
  });
}
</script>

<style>
</style>
