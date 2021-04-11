<demo>
不同尺寸
</demo>

<template>
  <Button size="big">大大大</Button>
  <Button size="normal">中中中</Button>
  <Button size="small">小小小</Button>
  <br/>
  <Button theme="text" size="big">大大大</Button>
  <Button theme="text" size="normal">中中中</Button>
  <Button theme="text" size="small">小小小</Button>
  <br/>
  <Button theme="link" size="big">大大大</Button>
  <Button theme="link" size="normal">中中中</Button>
  <Button theme="link" size="small">小小小</Button>
</template>

<script lang="ts">
import Button from '../../../lib/Button.vue';

export default {
  components: {Button}
};
</script>