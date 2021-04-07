<template>
  <h1>Dialog 示例</h1>
  <h3>示例1</h3>
  <div>
    <Button @click="toggle">toggle</Button>
    <Dialog :visible="visible"/>
  </div>
</template>
<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Dialog, Button},
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    return {visible, toggle};
  }
};
</script>