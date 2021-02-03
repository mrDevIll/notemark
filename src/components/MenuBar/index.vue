<template>
    <div >
        <div class="menu-bar-container shadow">
            <ToggleButton />

        <div class="menu-bar-title">
            <h2>
                Notemarks
                <font-awesome-icon :icon="clipIcon" class="icons clip-icon " />
            </h2>
        </div>
        <div class="menu-bar-elements">
             <font-awesome-icon :icon="noteIcon" class="icons sticky-icon" />: <strong> {{itemSize}} </strong>
             
        </div>
        </div>
    </div>

</template>

<script>
import ToggleButton from '../ToggleButton';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStickyNote, faClipboard } from '@fortawesome/free-solid-svg-icons';


export default {
    name: "MenuBar",
    props: ["itemSize"],
    data() {
        return {
            noteIcon: faStickyNote,
            clipIcon: faClipboard
        }
    },


    components: {
        ToggleButton, FontAwesomeIcon
    }

}
</script>


<style scoped>
.menu-bar-container {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ecf0f1;
  font-family: Georgia, Times, "Times New Roman", serif;
  width: 100%;
  padding: 0.5rem 2.5rem 0.05rem;
}

.menu-bar-title {
  font-family: "Comfortaa", cursive, Georgia, Times, "Times New Roman", serif;
  color: midnightblue;
  margin-left: -3rem;
  text-align: center;
  padding: 0 0.3rem;
}
.menu-bar-elements {
  position: absolute;
  padding: 0 2rem;
  top: 0.5rem;
  right: 3.5rem;
}

.sticky-icon {
  color: darkorchid;
}
</style>
