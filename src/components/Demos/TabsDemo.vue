<template>
  <h2>Tabs 标签页</h2>
  <p>分隔不同类别内容的选项卡组</p>
  <Demo :component="Tabs1Demo"/>
</template>
<script lang="ts">
import Demo from '../Demo.vue';
import Tabs1Demo from './examples/Tabs1.demo.vue';

export default {
  components: {Demo},
  setup() {
    return {Tabs1Demo};
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