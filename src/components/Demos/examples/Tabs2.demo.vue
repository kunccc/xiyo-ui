<demo>
卡片样式
</demo>

<template>
  <Tabs v-model:selected="selectedTitle" theme="card">
    <Tab title="客户">客户标签内容</Tab>
    <Tab title="员工">员工标签内容</Tab>
    <Tab title="任务补偿">任务补偿标签内容</Tab>
  </Tabs>
</template>

<script lang="ts">
import {Tabs, Tab} from '../../../lib';
import {ref} from 'vue';

export default {
  components: {Tabs, Tab},
  setup() {
    const selectedTitle = ref('客户');
    return {selectedTitle};
  }
};
</script>