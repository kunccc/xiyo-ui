<template>
  <h2>Dialog 对话框</h2>
  <p>弹出承载信息和操作的对话框</p>
  <Demo :component="Dialog1Demo"/>
  <Demo :component="Dialog2Demo"/>
</template>
<script lang="ts">
import Demo from '../Demo.vue';
import Dialog1Demo from './examples/Dialog1.demo.vue';
import Dialog2Demo from './examples/Dialog2.demo.vue';

export default {
  components: {Demo},
  setup() {
    return {Dialog1Demo, Dialog2Demo};
  }
};
</script>

<style lang="scss" scoped>
p {
  margin-top: 10px;
  font-size: 14px;
  color: #666;
}
</style>