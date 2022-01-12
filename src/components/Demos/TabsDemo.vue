<template>
  <h2>Tabs 标签页</h2>
  <p>分隔不同类别内容的选项卡组</p>
  <Demo :component="Tabs1Demo"/>
  <Demo :component="Tabs2Demo"/>
  <Attribute :attributes="attributes"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import Tabs1Demo from './examples/Tabs1.demo.vue';
import Tabs2Demo from './examples/Tabs2.demo.vue';
import Attribute from '../Attribute.vue';

export default {
  components: {Demo, Attribute},
  setup() {
    const attributes = [
      {
        parameter: 'selected',
        description: '当前选中标签的 title 属性',
        type: 'string'
      },
      {
        parameter: 'theme',
        description: 'Tabs 的样式',
        type: 'string',
        options: 'normal / card',
        default: 'normal'
      }
    ];
    return {Tabs1Demo, Tabs2Demo, attributes};
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