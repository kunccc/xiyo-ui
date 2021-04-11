<demo>
一句话打开 Dialog
</demo>

<template>
  <Button @click="showDialog">打开</Button>
</template>

<script lang="ts">
import Button from '../../../lib/Button.vue';
import {h} from 'vue';
import {openDialog} from '../../../lib/openDialog';

export default {
  components: {Button},
  setup() {
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: 'hello world',
        ok() {console.log('ok');},
        cancel() {console.log('cancel');}
      });
    };
    return {showDialog};
  }
};
</script>