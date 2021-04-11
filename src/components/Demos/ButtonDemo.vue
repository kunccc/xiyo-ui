<template>
  <h2>Button 按钮</h2>
  <p>用于开始一个即时操作</p>
  <Demo :component="Button1Demo"/>
  <Demo :component="Button2Demo"/>
  <Demo :component="Button3Demo"/>
  <Demo :component="Button4Demo"/>
  <Demo :component="Button5Demo"/>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import Demo from '../Demo.vue';
import Button1Demo from './examples/Button1.demo.vue';
import Button2Demo from './examples/Button2.demo.vue';
import Button3Demo from './examples/Button3.demo.vue';
import Button4Demo from './examples/Button4.demo.vue';
import Button5Demo from './examples/Button5.demo.vue';

export default {
  components: {Button, Demo},
  setup() {
    return {Button1Demo, Button2Demo, Button3Demo, Button4Demo, Button5Demo};
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