<template>
    <div class="notemark-screenshot-button">
        
        <font-awesome-icon :icon="camera" class="icons cliccable camera-icon shadow" v-on:click="takeScreenShot" title="Take screenshot"/>
    </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

export default {
    name: "ScreenShotButton",
    data: function () {
        return {
            camera: faCamera
        }
    },
    methods: {
        takeScreenShot: function () {
            return true;
        }
    },
    components: {
        FontAwesomeIcon
    }


}
</script>
<style scoped>
.notemark-screenshot-button {
  padding: 0.5rem;
}
.camera-icon {
  position: fixed;
  bottom: 0.3rem;
  left: 0.5rem;

  padding: 0.5rem;
  color: white;
  background-color: #7c4dff;
  border: 1px #616161 solid;
  border-radius: 50%;
  font-size: large;
  opacity: 0.8;
}
</style>
