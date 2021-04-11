<template>
  <h2>Switch 开关</h2>
  <p>用于两种对立状态间的切换</p>
  <Demo :component="Switch1Demo"/>
  <Demo :component="Switch2Demo"/>
</template>

<script lang="ts">
import Switch1Demo from './examples/Switch1.demo.vue';
import Switch2Demo from './examples/Switch2.demo.vue';
import Demo from '../Demo.vue';

export default {
  components: {Demo},
  setup() {
    return {Switch1Demo, Switch2Demo, Demo};
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