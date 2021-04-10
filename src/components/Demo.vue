<template>
  <div class="demo">
    <h3>{{ component.__sourceCodeTitle }}</h3>
    <div class="demo-content">
      <div class="demo-content-component">
        <component :is="component"/>
      </div>
      <div class="demo-content-action">
        <Button theme="link" @click="codeVisible = !codeVisible">查看代码</Button>
      </div>
      <div class="demo-content-code" :class="{codeVisible}">
        <pre v-html="html"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import 'prismjs';
import 'prismjs/themes/prism.css';
import {computed, ref} from 'vue';

const Prism = (window as any).Prism;

export default {
  components: {Button},
  props: {
    component: Object
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'javascript');
    });
    const codeVisible = ref(false);
    return {Prism, html, codeVisible};
  }
};
</script>

<style lang="scss" scoped>
.demo {
  margin: 50px 0;
  &-content {
    margin-top: 16px;
    border: 1px solid #ddd;
    &-component {
      border-bottom: 1px solid #ddd;
      padding: 20px 14px;
    }
    &-action {
      display: flex;
      justify-content: center;
      background: #fafafa;
    }
    &-code {
      transition: all .7s;
      overflow: hidden;
      max-height: 0;
      &.codeVisible {
        max-height: 300px;
      }
      pre {
        margin: 0;
        padding: 14px;
        background: #fafafa;
        font-size: 14px;
        font-family: Consolas, 'Courier New', Courier, monospace;
      }
    }
  }
}
</style>