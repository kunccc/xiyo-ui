<template>
  <h2>Collapse 折叠面板</h2>
  <p>收纳可以折叠/展开的内容区域</p>
  <Demo :component="Collapse1Demo"/>
  <Demo :component="Collapse2Demo"/>
  <Demo :component="Collapse3Demo"/>
  <Attribute title="Collapse Attributes" :attributes="attributes1"/>
  <Attribute title="CollapseItem Attributes" :attributes="attributes2"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import Attribute from '../Attribute.vue';
import Collapse1Demo from './examples/Collapse1.demo.vue';
import Collapse2Demo from './examples/Collapse2.demo.vue';
import Collapse3Demo from './examples/Collapse3.demo.vue';

export default {
  components: {Demo, Attribute},
  setup() {
    const attributes1 = [
      {
        parameter: 'active',
        description: '展开的面板',
        type: 'array'
      },
      {
        parameter: 'accordion',
        description: '是否使用手风琴效果',
        type: 'boolean',
        options: 'true / false',
        default: 'false'
      },
      {
        parameter: 'showArrow',
        description: '是否显示箭头',
        type: 'boolean',
        options: 'true / false',
        default: 'true'
      }
    ];
    const attributes2 = [
      {
        parameter: 'title',
        description: '面板标题',
        type: 'string'
      }
    ];
    return {Collapse1Demo, Collapse2Demo, Collapse3Demo, attributes1, attributes2};
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