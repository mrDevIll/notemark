<template>
    <div class="side-menu-notemark" >
        
        <div v-for="(node, key) in nodes" :key="key">
           <div class="title">
            {{key}}
            </div>
            <Node :children="node" />
        </div>


        
    </div>
</template>
<script>
import Node from './Node'

export default {
    name: "SelectedSideMenu",
    components: { Node },
    data: function () {
        return {
            nodes: {
                "name-id":
                    [
                        { web: "test", text: "this is a test", title: "title1", id: 1 },
                        { id: 2, web: "test2", title: "title1", text: "this is a test2" }
                    ],
                "name-id2":
                    [
                        { id: 3, web: "test3", title: "title1", text: "this is a test3" },
                        { id: 4, web: "test23", title: "title1", text: "this is a test23" }
                    ]
            }
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
.title {
  margin-left: 0.3rem;
  font-size: 0.7rem;
}
.side-menu-notemark {
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
</style>
