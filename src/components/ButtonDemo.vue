<template>
  <h1>Button 示例</h1>
  <h3>示例1</h3>
  <div>
    <Button theme="button">按钮</Button>
    <Button theme="text">文本</Button>
    <Button theme="link">链接</Button>
  </div>
  <h3>示例2</h3>
  <div>
    <Button size="big">大大大</Button>
    <Button size="normal">中中中</Button>
    <Button size="small">小小小</Button>
  </div>
  <div>
    <Button theme="text" size="big">大大大</Button>
    <Button theme="text" size="normal">中中中</Button>
    <Button theme="text" size="small">小小小</Button>
  </div>
  <div>
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link" size="normal">中中中</Button>
    <Button theme="link" size="small">小小小</Button>
  </div>
  <h3>示例3</h3>
  <div>
    <Button level="main">主要按钮</Button>
    <Button level="normal">普通按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="text" level="main">主要文本按钮</Button>
    <Button theme="text" level="normal">普通文本按钮</Button>
    <Button theme="text" level="danger">危险文本按钮</Button>
  </div>
  <div>
    <Button theme="link" level="main">主要链接按钮</Button>
    <Button theme="link" level="normal">普通链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
  </div>
  <h3>示例4</h3>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="text" disabled>禁用文本按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
  </div>
  <h3>示例5</h3>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button}
};
</script>

<style lang="scss" scoped>
h3 {
  margin: 20px 0 10px;
}
</style>