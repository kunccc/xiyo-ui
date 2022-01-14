<template>
  <div class="xiyo-collapse">
    <ul>
      <li v-for="(t, index) in titles" :key="index">
        <div class="xiyo-collapse-header" @click="select(t)">
          {{ t }}
          <Icon name="arrow2" :class="`${active.indexOf(t) >= 0 ? 'active' : ''} ${showArrow ? '' : 'inVisible'}`"/>
        </div>
        <div class="xiyo-collapse-content" :ref="setRef">
          <component :is="subTags[index]" :key="subTags[index].props.title"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import CollapseItem from './CollapseItem.vue';
import Icon from '../components/Icon.vue';
import {onMounted, ref} from 'vue';

export default {
  props: {
    active: Array,
    accordion: Boolean,
    showArrow: {
      type: Boolean,
      default: true
    }
  },
  components: {Icon},
  setup(props, context) {
    const contents = ref([]);
    const setRef = el => contents.value.push(el);
    // 获取子组件
    const subTags = context.slots.default();
    // 检查子组件类型
    subTags.forEach(tag => {
      if (tag.type !== CollapseItem) throw new Error('The subtag of Tabs must be CollapseItem');
    });
    const titles = subTags.map(tag => tag.props.title);
    // 声明 heightArr 用来存放所有内容的高度
    let heightArr = [];
    onMounted(() => {
      // 将所有内容的高度推入数组存储
      contents.value.forEach(content => heightArr.push(content.scrollHeight));
      // 页面第一次加载时 激活 content 高度
      if (props.accordion) {
        if (props.active.length >= 2) throw new Error('Property active can only has one item');
        const index = titles.indexOf(props.active[0]);
        contents.value[index].style.height = heightArr[index] + 16 + 'px';
      } else {
        props.active.forEach(item => {
          const index = titles.indexOf(item);
          contents.value[index].style.height = heightArr[index] + 16 + 'px';
        });
      }
    });
    const select = (title: string) => {
      let {active} = props;
      const activeIndex = active.indexOf(title);
      const allIndex = titles.indexOf(title);
      if (props.accordion) {
        if (active[0] === title) {
          contents.value[allIndex].style.height = 0;
          active = [];
        } else {
          contents.value.forEach(content => content.style.height = 0);
          contents.value[allIndex].style.height = heightArr[allIndex] + 16 + 'px';
          active = [title];
        }
        context.emit('update:active', active);
        return;
      }
      if (activeIndex >= 0) {
        contents.value[allIndex].style.height = 0;
        active.splice(activeIndex, 1);
      } else {
        contents.value[allIndex].style.height = heightArr[allIndex] + 16 + 'px';
        active.push(title);
      }
      context.emit('update:active', active);
    };
    return {titles, subTags, select, setRef};
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
      &.inVisible {
        display: none;
      }
    }
  }
  &-content {
    height: 0;
    overflow: hidden;
    transition: all .3s ease;
    font-size: 13px;
    color: #333;
    padding-right: 20px;
  }
}
</style>