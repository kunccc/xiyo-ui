<demo>
不同尺寸
</demo>

<template>
  <span><Button size="big">大大</Button></span>
  <span><Button size="normal">中中</Button></span>
  <span><Button size="small">小小</Button></span>
  <br/>
  <span><Button theme="text" size="big">大大</Button></span>
  <span><Button theme="text" size="normal">中中</Button></span>
  <span><Button theme="text" size="small">小小</Button></span>
  <br/>
  <span><Button theme="link" size="big">大大</Button></span>
  <span><Button theme="link" size="normal">中中</Button></span>
  <span><Button theme="link" size="small">小小</Button></span>
</template>

<script lang="ts">
import Button from '../../../lib/Button.vue';

export default {
  components: {Button}
};
</script>

<style lang="scss" scoped>
span {
  margin-right: 10px;
}
</style>