<template>
  <h2>Switch 开关</h2>
  <p>用于两种对立状态间的切换</p>
  <Demo :component="Switch1Demo"/>
  <Demo :component="Switch2Demo"/>
  <Attribute :attributes="attributes"/>
</template>

<script lang="ts">
import Switch1Demo from './examples/Switch1.demo.vue';
import Switch2Demo from './examples/Switch2.demo.vue';
import Demo from '../Demo.vue';
import Attribute from '../Attribute.vue';

export default {
  components: {Demo, Attribute},
  setup() {
    const attributes = [
      {
        parameter: 'value',
        description: '开关是否开启',
        type: 'boolean',
        options: 'true / false',
        default: 'false'
      },
      {
        parameter: 'disabled',
        description: '开关是否禁用',
        type: 'boolean',
        options: 'true / false',
        default: 'false'
      }
    ];
    return {Switch1Demo, Switch2Demo, Demo, attributes};
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