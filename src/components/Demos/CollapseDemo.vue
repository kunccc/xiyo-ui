<template>
  <h2>Collapse 折叠面板</h2>
  <p>收纳可以折叠/展开的内容区域</p>
  <Demo :component="Collapse1Demo"/>

</template>

<script lang="ts">
import Demo from '../Demo.vue';
import Attribute from '../Attribute.vue';
import Collapse1Demo from './examples/Collapse1.demo.vue';

export default {
  components: {Demo, Attribute},
  setup() {
    return {Collapse1Demo};
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