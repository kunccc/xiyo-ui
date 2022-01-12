<template>
  <h2>Button 按钮</h2>
  <p>用于开始一个即时操作</p>
  <Demo :component="Button1Demo"/>
  <Demo :component="Button6Demo"/>
  <Demo :component="Button2Demo"/>
  <Demo :component="Button3Demo"/>
  <Demo :component="Button4Demo"/>
  <Demo :component="Button5Demo"/>
  <Attribute :attributes="attributes"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import Button1Demo from './examples/Button1.demo.vue';
import Button2Demo from './examples/Button2.demo.vue';
import Button3Demo from './examples/Button3.demo.vue';
import Button4Demo from './examples/Button4.demo.vue';
import Button5Demo from './examples/Button5.demo.vue';
import Button6Demo from './examples/Button6.demo.vue';
import Attribute from '../Attribute.vue';

export default {
  components: {Demo, Attribute},
  setup() {
    const attributes = [
      {
        parameter: 'level',
        description: '按钮的级别',
        type: 'string',
        options: 'normal / main',
        default: 'normal'
      },
      {
        parameter: 'theme',
        description: '按钮的类型',
        type: 'string',
        options: 'button / text / link',
        default: 'button'
      },
      {
        parameter: 'size',
        description: '按钮的尺寸',
        type: 'string',
        options: 'small / normal / big',
        default: 'normal'
      },
      {
        parameter: 'loading',
        description: '按钮是否处于 loading 状态',
        type: 'boolean',
        options: 'true / false',
        default: 'false'
      },
      {
        parameter: 'disabled',
        description: '按钮是否禁用',
        type: 'boolean',
        options: 'true / false',
        default: 'false'
      }
    ];
    return {Button1Demo, Button2Demo, Button3Demo, Button4Demo, Button5Demo, Button6Demo, attributes};
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