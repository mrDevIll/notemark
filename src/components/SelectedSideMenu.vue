<template>
    <div>
       
        <div v-for="(note, key) in nodes" :key="key">
            <div class="notemark-side-menu-title">
            {{key}}
            </div>
            <Node :children="note" />
        </div>


        
    </div>
</template>
<script>
import Node from './Node'

export default {
    name: "SelectedSideMenu",
    components: { Node },
    props: ["nodes", "k"],
    data: function () {
        return {

        }
    },

}

</script>
<style>
.notemark-side-menu {
  position: absolute;
  background-color: gray;
  color: black;
  top: 10%;
  right: 0;
  width: 15%;
  padding: 1rem 0;
  border-radius: 10px;
  z-index: 100000;
}
.notemark-side-menu-title {
  margin-left: 0.3rem;
  font-size: 0.7rem;
  color: black !important;
}
</style>
