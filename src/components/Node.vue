<template>
    <div class="container" >
   
      <div v-for="child in children" :key="child.id">
        <div class="container-text">
          {{child.text}}
        </div>
        <div class="container-title">
          {{child.title}} || {{child.web}}
        </div>
      </div>
      
        
    </div>
</template>
<script>

export default {
  name: "node",
  props: ["children"],
  data: function () {
    return {


    }
  },

}
</script>
<style scoped>
.container {
  padding: 0.4rem;
  font-size: 0.5rem;
}
.container-title {
  text-align: right;
  padding: 0.2rem 0;
  font-weight: 800;
}
.container-data {
  text-align: justify;
  margin-top: 0.3rem;
  padding: 0.3rem 0;
  font-size: 0.6rem;
}
.container-data:hover {
  background-color: blue;
}
.container-website {
  padding: 0.2rem;
}
</style>

