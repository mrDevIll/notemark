<template>
    <div class="child-container" >
    
      <div v-for="child in children" :key="child.id">
        <div class="child-container-text">
          {{child.text}}
        </div>
        <div class="child-container-ref">
          {{child.title}} - <a :href="child.website" title="CTRL + click to open in a new tab">{{child.website}}</a> 
         <font-awesome-icon :icon="faMinus" title="delete" class="delete-icon icons cliccable" v-on:click="deleteChild(father, child.id)"/>
         
        </div>
        <hr>
      </div>
    
    </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { deleteNodeChild } from '../utility/manageMessage.js'


export default {
  name: "Note",
  props: ["children", "father"],
  data: function () {
    return {
      faMinus: faMinusCircle

    }
  },
  components: {
    FontAwesomeIcon
  },

  methods: {
    deleteChild: function (name, id) {
      deleteNodeChild(name, id);
    }
  }
}
</script>
<style scoped>
.child-container {
  margin-left: 1.2rem;
  font-size: 0.8rem;
}
.child-container-ref {
  text-align: right;
  padding: 0.2rem 0;
  font-weight: bold;
  color: #7c4dff;
}
.child-container-text {
  text-align: justify;
  margin-top: 0.3rem;
  padding: 0.3rem 0;
  font-size: 0.8rem;
  color: #757575;
}
a:visited {
  color: #7c4dff;
}
</style>

