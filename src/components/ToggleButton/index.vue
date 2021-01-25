<template>
<div class="toggle-container">
  
    <label for="toggle_button">
        <span v-if="isActive" class="toggle__label">Enabled</span>
        <span v-if="! isActive" class="toggle__label">Disabled</span>

        <input type="checkbox" id="toggle_button" v-model="checkedValue">
        <span class="toggle__switch"></span>
    </label>
</div>
</template>
<script>
import { getStatus, setStatus } from '../../utility/manageStatus.js';

export default {
  name: "ToggleButton",
  data() {
    return {
      currentState: { active: false }
    }
  },

  computed: {
    isActive() {
      return this.currentState.active;
    },
    checkedValue: {
      get() {
        return this.currentState.active
      },
      set(newValue) {
        setStatus(newValue);
        refreshTab();
        this.currentState.active = newValue;
      }
    }
  },
  mounted: function () {
    getStatus(this.currentState);

  },

}

function refreshTab() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.update(tabs[0].id, { url: tabs[0].url });
  });
}


</script>

<style scoped>
.toggle-container {
  position: absolute;
  top: 1rem;
  left: 0.5rem;
}
.toggle__button {
  vertical-align: middle;
  user-select: none;
  cursor: pointer;
}
.toggle__button input[type="checkbox"] {
  opacity: 0;
  position: absolute;
  width: 1px;
  height: 1px;
}
.toggle__button .toggle__switch {
  display: inline-block;
  height: 12px;
  border-radius: 26px;
  width: 40px;
  background: #bfcbd9;
  box-shadow: inset 0 0 1px #bfcbd9;
  position: relative;
  margin-left: 10px;
  transition: all 0.25s;
}

.toggle__button .toggle__switch::after,
.toggle__button .toggle__switch::before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  left: 0;
  top: -3px;
  transform: translateX(0);
  transition: all 0.25s cubic-bezier(0.5, -0.6, 0.5, 1.6);
}

.toggle__button .toggle__switch::after {
  background: #4d4d4d;
  box-shadow: 0 0 1px #666;
}
.toggle__button .toggle__switch::before {
  background: #4d4d4d;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  opacity: 0;
}
</style>