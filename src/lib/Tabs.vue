<template>
  <div class="xiyo-tabs">
    <div class="xiyo-tabs-nav">
      <div class="xiyo-tabs-nav-item" :class="{selected: t === selected}" v-for="(t, index) in titles"
           @click="select(t)" :key="index">
        {{ t }}
      </div>
    </div>
    <div class="xiyo-tabs-content">
      <component class="xiyo-tabs-content-item" :class="{selected: subtag.props.title === selected}"
                 v-for="(subtag, index) in subtags" :is="subtag" :key="index"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const subtags = context.slots.default();
    subtags.forEach(tag => {
      if (tag.type !== Tab) throw new Error('The subtag of Tabs must be Tab');
    });
    const titles = subtags.map(tag => {
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit('update:selected', title);
    };
    return {subtags, titles, select};
  }
};
</script>

<style lang="scss">
.xiyo-tabs {
  &-nav {
    display: flex;
    color: #333;
    border-bottom: 1px solid #d9d9d9;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: #40a9ff;
      }
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>