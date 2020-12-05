<template>
    <div class="side-menu-notemark" >
        <Node  />


        
    </div>
</template>
<script>
import Node from './Node'

export default {
    name: "SelectedSideMenu",
    components: { Node },
    data: function () {
        return {
            test: []
        }
    },
    computed: {
        upload() {

        }
    },

    mounted() {



    }
}

</script>
<style scoped>
.side-menu-notemark {
  position: absolute;
  background-color: black;
  color: aliceblue;
  top: 10%;
  right: 0;
  width: 15%;
  height: 80%;
  border-radius: 10px;
  z-index: 100000;
}
</style>
