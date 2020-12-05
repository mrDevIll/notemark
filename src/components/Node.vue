<template>
    <div class="container" >
        <div v-for="n in nodes" :key="n.id"> 
            <div class="container-title">

            {{n.title}}
            </div>
            <div class="contaier-data">{{n.text}}  </div>
            <hr>
           <div class="container-website">{{n.web}}</div>
         </div>

    </div>
</template>
<script>
export default {
  name: "node",
  props: [],
  data: function () {
    return {
      nodes: [
        { id: 0, title: "my first note", text: "this is copied from text selection", web: "geekunyt.com" },
        { id: 1, title: "my second note", text: "this is copied fort the second note text selection", web: "geekunyt.com" }
      ]
    }
  }
}
</script>
<style scoped>
.container {
  padding-top: 1rem;
  font-size: 0.5rem;
}
.container-title {
  text-align: left;
  color: aliceblue;
  padding: 0.2rem 0;

  font-weight: 800;

  margin-left: -0.4rem;
}
.container-data {
  text-align: justify;
  margin-top: 0.3rem;
  padding: 0.3rem;
  font-size: 0.6rem;
}
.container-data:hover {
  background-color: blue;
}
.container-website {
  padding: 0.2rem;
}
</style>

