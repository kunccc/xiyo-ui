<demo>
不同类型
</demo>

<template>
  <span><Button theme="button">按钮</Button></span>
  <span><Button theme="text">文本</Button></span>
  <span><Button theme="link">链接</Button></span>
</template>

<script lang="ts">
import {Button} from '../../../lib';

export default {
  components: {Button}
};
</script>

<style lang="scss" scoped>
span {
  margin-right: 10px;
}
</style>