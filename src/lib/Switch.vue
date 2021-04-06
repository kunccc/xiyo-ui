<template>
  <button @click="toggle" :class="{checked}"><span></span></button>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  setup() {
    const checked = ref(false);
    const toggle = () => {
      checked.value = !checked.value;
    };
    return {checked, toggle};
  }
};
</script>

<style lang="scss">
button {
  width: 44px;
  height: 22px;
  border: none;
  border-radius: 11px;
  background: grey;
  position: relative;
  span {
    width: 18px;
    height: 18px;
    border-radius: 18px;
    background: #fff;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: left .3s;
  }
  &.checked {
    background: #FF8D78;
    span {
      left: 24px;
    }
  }
  &:focus {
    outline: none
  }
}
</style>