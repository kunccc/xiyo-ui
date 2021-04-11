<demo>
不同主题
</demo>

<template>
  <Button level="main">主要按钮</Button>
  <Button level="normal">普通按钮</Button>
  <Button level="danger">危险按钮</Button>
  <br/>
  <Button theme="text" level="main">主要文本按钮</Button>
  <Button theme="text" level="normal">普通文本按钮</Button>
  <Button theme="text" level="danger">危险文本按钮</Button>
  <br/>
  <Button theme="link" level="main">主要链接按钮</Button>
  <Button theme="link" level="normal">普通链接按钮</Button>
  <Button theme="link" level="danger">危险链接按钮</Button>
</template>

<script lang="ts">
import Button from '../../../lib/Button.vue';

export default {
  components: {Button}
};
</script>