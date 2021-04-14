<demo>
基本用法
</demo>

<template>
  <Button @click="open">打开</Button>
  <Dialog v-model:visible="visible" title="标题">
    Hello World
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
    return {visible, open};
  }
};
</script>