<template>
  <div class="xiyo-tabs" :class="{card: theme === 'card'}">
    <div class="xiyo-tabs-nav" ref="container">
      <div class="xiyo-tabs-nav-item" :class="{selected: t === selected}"
           v-for="(t, index) in titles"
           :ref="el => { if (t === selected) selectedItem = el}" @click="select(t)" :key="index">
        {{ t }}
      </div>
      <div class="xiyo-tabs-nav-indicator" ref="indicator"/>
    </div>
    <div class="xiyo-tabs-content">
      <component :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {ref, watchEffect, computed} from 'vue';

export default {
  props: {
    selected: {
      type: String
    },
    theme: {
      type: String
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    watchEffect(() => {
      const {width} = selectedItem.value.getBoundingClientRect();
      indicator.value.style.width = width + 'px';
      const {left: left1} = container.value.getBoundingClientRect();
      const {left: left2} = selectedItem.value.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + 'px';
    }, {flush: 'post'});
    // 获取子组件
    const subtags = context.slots.default();
    // 检查子组件类型
    subtags.forEach(tag => {
      if (tag.type !== Tab) throw new Error('The subtag of Tabs must be Tab');
    });
    const current = computed(() => {
      return subtags.find(tag => tag.props.title === props.selected);
    });
    const titles = subtags.map(tag => {
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit('update:selected', title);
    };
    return {subtags, titles, select, selectedItem, indicator, container, current};
  }
};
</script>

<style lang="scss">
.xiyo-tabs {
  &-nav {
    display: flex;
    color: #333;
    border-bottom: 1px solid #d9d9d9;
    position: relative;
    &-item {
      padding-bottom: 8px;
      margin: 0 16px;
      cursor: pointer;
      transition: all .3s;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: #FF8D78;
      }
    }
    &-indicator {
      background: #FF8D78;
      height: 2px;
      width: 100px;
      position: absolute;
      bottom: -1px;
      left: 0;
      transition: all .3s;
    }
  }
  &-content {
    padding: 24px 0 8px;
  }
}
.card {
  border: 1px solid #d9d9d9;
  box-shadow: 0 1px 3px fade-out(black, .8);
  .xiyo-tabs-nav {
    background: lighten(#FF8F78, 24);
    color: #777;
    &-item {
      border-left: 1px solid transparent;
      border-right: 1px solid transparent;
      padding: 8px 16px;
      margin: 0;
      transition: all .3s;
      &.selected {
        border-left: 1px solid #d9d9d9;
        border-right: 1px solid #d9d9d9;
        background: #fff;
      }
      &:first-child {
        border-left: none;
      }
    }
    &-indicator {
      background: #fff;
      height: 1px;
      bottom: -1px;
    }
  }
  .xiyo-tabs-content {
    padding: 24px 16px;
  }
}
</style>