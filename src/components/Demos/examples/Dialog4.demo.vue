<demo>
控制遮罩是否触发返回
</demo>

<template>
  <Button @click="open">打开</Button>
  <Dialog v-model:visible="visible" title="标题" closeOnOverlay>
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
    return {visible, open};
  }
};
</script>