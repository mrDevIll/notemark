<template>
    <div class="child-container" >
   
      <div v-for="child in children" :key="child.id">
        <div class="child-container-text">
          {{child.text}}
        </div>
        <div class="child-container-ref">
          {{child.title}}  {{child.web}} 
         <font-awesome-icon :icon="faMinus" title="delete" class="delete-icon icons cliccable" v-on:click="deleteChild(father, child.id)"/>
         <!-- TODO: add delete funciton via child.id {{child.id}} -->
        </div>
      </div>
        
    </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { deleteNodeChild } from '../utility/manageMessage.js'


export default {
  name: "Child-note",
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
  color: #673ab7;
}
.child-container-text {
  text-align: justify;
  margin-top: 0.3rem;
  padding: 0.3rem 0;
  font-size: 0.8rem;
}
</style>

