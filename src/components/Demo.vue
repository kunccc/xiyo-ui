<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-content">
      <component :is="component"/>
      <div class="demo-content-action">
        <Button theme="link" @click="codeVisible = !codeVisible">查看代码</Button>
      </div>
      <pre v-if="codeVisible" class="language-html" v-html="html"/>
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
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
    });
    const codeVisible = ref(false);
    return {Prism, html, codeVisible};
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