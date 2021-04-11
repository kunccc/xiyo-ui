<demo>
基本用法
</demo>

<template>
  <Tabs v-model:selected="selectedTitle">
    <Tab title="客户">内容1</Tab>
    <Tab title="员工">内容2</Tab>
    <Tab title="任务补偿">内容3</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../../../lib/Tabs.vue';
import Tab from '../../../lib/Tab.vue';
import {ref} from 'vue';

export default {
  components: {Tabs, Tab},
  setup() {
    const selectedTitle = ref('客户');
    return {selectedTitle};
  }
};
</script>