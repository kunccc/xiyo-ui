<template>
  <TopNav toggleAsideButtonVisible underlineVisible/>
  <div class="content">
    <aside v-if="asideVisible">
      <h2>文档</h2>
      <ol>
        <li>
          <router-link to="/doc/intro">介绍</router-link>
        </li>
        <li>
          <router-link to="/doc/install">安装</router-link>
        </li>
        <li>
          <router-link to="/doc/get-started">开始使用</router-link>
        </li>
      </ol>
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch 开关</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button 按钮</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 对话</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 标签页</router-link>
        </li>
      </ol>
    </aside>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
import {inject, Ref} from 'vue';

export default {
  components: {TopNav},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return {asideVisible};
  }
};
</script>

<style lang="scss" scoped>
.content {
  margin: 66px 16px 16px 166px;
  aside {
    background: #fff;
    width: 150px;
    height: 100%;
    padding: 56px 16px 16px 16px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    h2 {
      margin: 16px 0 8px;
    }
    li {
      padding: 4px 0;
    }
  }
  main {
    padding: 20px 14px;
    transition: all .3s;
  }
}
@media (max-width: 500px) {
  .content {
    margin-left: 16px;
  }
}
</style>