<template>
  <div class="xiyo-collapse">
    <ul>
      <li v-for="(t, index) in titles" :key="index">
        <div class="xiyo-collapse-header" @click="select(t)">
          {{ t }}
          <Icon name="arrow2" :class="{active: [...active].indexOf(t) >= 0}"/>
        </div>
        <div class="xiyo-collapse-content">
          <component :is="subTags[index]" :key="subTags[index].props.title"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import CollapseItem from './CollapseItem.vue';
import Icon from '../components/Icon.vue';
import {onMounted} from 'vue';

export default {
  props: {
    active: {
      type: Array
    }
  },
  components: {Icon},
  setup(props, context) {
    // 获取子组件
    const subTags = context.slots.default();
    // 检查子组件类型
    subTags.forEach(tag => {
      if (tag.type !== CollapseItem) throw new Error('The subtag of Tabs must be CollapseItem');
    });
    const titles = subTags.map(tag => tag.props.title);
    // 已经激活的所有标题 非数组 转化为数组
    // 声明 heightArr 用来存放所有内容的高度
    let heightArr = [];
    let contents;
    onMounted(() => {
      contents = document.querySelectorAll('.xiyo-collapse-content');
      contents.forEach(content => heightArr.push(content.scrollHeight));
      // 页面第一次加载时 将用户所传的已经激活的 content 高度激活
      props.active.forEach(item => {
        const index = titles.indexOf(item);
        contents[index].style.height = heightArr[index] + 16 + 'px';
      });
    });
    const select = (title: string) => {
      const active = [...props.active];
      const activeIndex = active.indexOf(title);
      const allIndex = titles.indexOf(title);
      if (activeIndex >= 0) {
        contents[allIndex].style.height = 0;
        active.splice(activeIndex, 1);
      } else {
        contents[allIndex].style.height = heightArr[allIndex] + 16 + 'px';
        active.push(title);
      }
      context.emit('update:active', active);
    };
    return {titles, subTags, select};
  }
};
</script>

<style lang="scss">
.xiyo-collapse {
  li {
    margin-bottom: 15px;
    border-bottom: 1px solid #ddd;
    &:last-child {
      margin: 0;
    }
  }
  &-header {
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #333;
    cursor: pointer;
    .icon {
      transition: all .3s ease;
      &.active {
        transform: rotate(90deg);
      }
    }
  }
  &-content {
    height: 0;
    overflow: hidden;
    transition: all .3s ease;
    font-size: 13px;
    color: #333;
  }
}
</style>