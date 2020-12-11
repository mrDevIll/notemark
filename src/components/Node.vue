<template>
    <div class="notemark-container" >
   
      <div v-for="child in children" :key="child.id">
        <div class="notemark-container-text">
          {{child.text}}
        </div>
        <div class="notemark-container-title">
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
.notemark-container {
  padding: 0.4rem;
  font-size: 0.5rem;
}
.notemark-container-title {
  text-align: right;
  padding: 0.2rem 0;
  font-weight: 800;
  color: blue !important;
}
.notemark-container-data {
  text-align: justify;
  margin-top: 0.3rem;
  padding: 0.3rem 0;
  font-size: 0.6rem;
}
.notemark-container-data:hover {
  background-color: blue;
}
.notemark-container-website {
  padding: 0.2rem;
}
</style>

