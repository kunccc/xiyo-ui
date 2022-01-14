<demo>
隐藏箭头
</demo>

<template>
  <Collapse v-model:active="activeItems" :showArrow="false">
    <CollapseItem title="席克定律">
      <p>席克定律可以用来测出当有多重选择时，需要多少时间能做出决定，适用于简单判断的场景。</p>
    </CollapseItem>
    <CollapseItem title="米勒定律">
      <p>从心理学的角度来看，人类处理信息的能力是有限度的。</p>
      <p>人脑处理信息有一个魔法数字 7 的限制，也就是说，人的大脑最多同时处理 5 到 9 个信息。</p>
    </CollapseItem>
    <CollapseItem title="雅各布定律">
      <p>用户将大部分时间花在别人的产品上，而不是你的。</p>
      <p>这意味他们希望你的产品跟别人的有相同的操作方法和使用模式。</p>
    </CollapseItem>
  </Collapse>
</template>

<script lang="ts">
import Collapse from '../../../lib/Collapse.vue';
import CollapseItem from '../../../lib/CollapseItem.vue';
import {ref} from 'vue';

export default {
  components: {Collapse, CollapseItem},
  setup() {
    const activeItems = ref(['席克定律']);
    return {activeItems};
  }
};
</script>