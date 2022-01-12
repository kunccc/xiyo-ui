<demo>
接受回调
</demo>

<template>
  <Button @click="open">打开</Button>
  <Dialog v-model:visible="visible" title="标题" :onConfirm="onConfirm" :onCancel="onCancel">
    Hello world
  </Dialog>
</template>

<script lang="ts">
import {Button, Dialog} from '../../../lib';
import {ref} from 'vue';

export default {
  components: {Button, Dialog},
  setup() {
    const visible = ref(false);
    const open = () => {
      visible.value = true;
    };
    const onConfirm = () => {console.log('onConfirm');};
    const onCancel = () => {console.log('onCancel');};
    return {visible, open, onConfirm, onCancel};
  }
};
</script>