<template>
  <h2>Tabs 标签页</h2>
  <p>分隔不同类别内容的选项卡组</p>
  <Demo :component="Tabs1Demo"/>
  <Demo :component="Tabs2Demo"/>
</template>
<script lang="ts">
import Demo from '../Demo.vue';
import Tabs1Demo from './examples/Tabs1.demo.vue';
import Tabs2Demo from './examples/Tabs2.demo.vue';

export default {
  components: {Demo},
  setup() {
    return {Tabs1Demo, Tabs2Demo};
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