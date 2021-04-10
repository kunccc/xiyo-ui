<template>
  <h1>Switch 开关</h1>
  <p>用于两种对立状态间的切换</p>
  <div class="demo">
    <h2>基本用法</h2>
    <div class="demo-content">
      <component :is="Switch1Demo"/>
      <div class="demo-content-action">
        <Button theme="link">查看代码</Button>
      </div>
      <pre class="language-html" v-html="Prism.highlight(Switch1Demo.__sourceCode, Prism.languages.html, 'html')"/>
    </div>
  </div>
  <div class="demo">
    <h2>支持 disabled</h2>
    <div class="demo-content">
      <component :is="Switch2Demo"/>
      <div class="demo-content-action">
        <Button theme="link">查看代码</Button>
      </div>
      <pre class="language-html" v-html="Prism.highlight(Switch2Demo.__sourceCode, Prism.languages.html, 'html')"/>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Switch1Demo from './Switch1.demo.vue';
import Switch2Demo from './Switch2.demo.vue';
import 'prismjs';
import 'prismjs/themes/prism.css';

const Prism = (window as any).Prism;

export default {
  components: {Button},
  setup() {
    return {Switch1Demo, Switch2Demo, Prism};
  }
};
</script>

<style lang="scss" scoped>
.demo {
  margin: 60px 0;
  &-content {
    border: 1px solid #ddd;
    padding: 16px;
    margin-top: 16px;
    &-action {
      display: flex;
      justify-content: center;
    }
    pre {
      font-size: 14px;
      font-family: Consolas, 'Courier New', Courier, monospace;
    }
  }
}
</style>