<demo>
一个函数打开 Dialog
</demo>

<template>
  <Button @click="showDialog">打开</Button>
</template>

<script lang="ts">
import Button from '../../../lib/Button.vue';
import {openDialog} from '../../../lib';

export default {
  components: {Button},
  setup() {
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: 'Hello World',
        ok() {console.log('ok');},
        cancel() {console.log('cancel');}
      });
    };
    return {showDialog};
  }
};
</script>