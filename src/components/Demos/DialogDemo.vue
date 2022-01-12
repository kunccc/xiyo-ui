<template>
  <h2>Dialog 对话框</h2>
  <p>弹出承载信息和操作的对话框</p>
  <Demo :component="Dialog1Demo"/>
  <Demo :component="Dialog3Demo"/>
  <Demo :component="Dialog4Demo"/>
  <Attribute :attributes="attributes"/>
</template>
<script lang="ts">
import Demo from '../Demo.vue';
import Dialog1Demo from './examples/Dialog1.demo.vue';
import Dialog3Demo from './examples/Dialog3.demo.vue';
import Dialog4Demo from './examples/Dialog4.demo.vue';
import Attribute from '../Attribute.vue';

export default {
  components: {Demo, Attribute},
  setup() {
    const attributes = [
      {
        parameter: 'visible',
        description: '对话框是否可见',
        type: 'boolean',
        options: 'true / false',
        default: 'false'
      },
      {
        parameter: 'title',
        description: '对话框的标题',
        type: 'string',
      },
      {
        parameter: 'closeOnOverlay',
        description: '控制点击遮罩时是否关闭对话框',
        type: 'boolean',
        options: 'true / false',
        default: 'false'
      },
      {
        parameter: 'onConfirm',
        description: '点击确定后执行的回调',
        type: 'function'
      },
      {
        parameter: 'onCancel',
        description: '点击取消后执行的回调',
        type: 'function'
      }
    ];
    return {Dialog1Demo, Dialog3Demo, Dialog4Demo, attributes};
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