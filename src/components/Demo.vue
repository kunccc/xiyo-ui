<template>
  <div class="demo">
    <h3>{{ component.__sourceCodeTitle }}</h3>
    <div class="demo-content">
      <div class="demo-content-component">
        <component :is="component"/>
      </div>
      <div class="demo-content-action" @click="codeVisible = !codeVisible">
        <svg class="icon" :class="{codeVisible}">
          <use xlink:href="#icon-arrow"></use>
        </svg>
        <div class="demo-content-action-button">
          <Button theme="link" v-if="!codeVisible">查看代码</Button>
          <Button theme="link" v-else>隐藏代码</Button>
        </div>
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
    box-shadow: 0 0 3px fade-out(black, .9);
    &-component {
      border-bottom: 1px solid #ddd;
      padding: 20px 14px;
    }
    &-action {
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background .3s;
      &:hover {
        background: #fafafa;
        .xiyo-theme-link {
          background: #fafafa;
        }
      }
      &-button {
        transition: all .3s;
        transform: translateX(32px);
        opacity: 0;
        .xiyo-theme-link:hover {
          color: #FF8D78;
        }
      }
      .icon {
        fill: #FF8D78;
        transition: all .3s;
        transform: scale(1.3) translateX(34px);
        &.codeVisible {
          transform: scale(1.3) translateX(34px) rotate(-180deg);
        }
      }
      @media (min-width: 501px) {
        &:hover {
          cursor: pointer;
          .demo-content-action-button {
            transform: translateX(6px);
            opacity: 1;
          }
          .icon {
            transform: scale(1.3) translateX(6px);
            &.codeVisible {
              transform: scale(1.3) translateX(6px) rotate(-180deg);
            }
          }
        }
      }
    }
    @media (max-width: 500px) {
      .demo-content-action {
        background: #fff;
        &:hover {
          background: #fff;
          .xiyo-theme-link {
            background: #fff;
          }
        }
        .xiyo-theme-link {
          background: #fff;
        }
        &-button {
          transform: translateX(0);
          opacity: 1;
        }
        .icon {
          transform: scale(1.3) translateX(0);
          &.codeVisible {
            transform: scale(1.3) translateX(0) rotate(-180deg);
          }
        }
      }
    }
    &-code {
      transition: all .4s;
      max-height: 0;
      overflow: auto;
      background: #fafafa;
      &.codeVisible {
        max-height: 490px;
      }
      pre {
        margin: 0;
        padding: 16px;
        font-size: 14px;
        font-family: Consolas, 'Courier New', Courier, monospace;
      }
    }
  }
}
</style>