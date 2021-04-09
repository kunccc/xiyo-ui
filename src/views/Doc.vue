<template>
  <TopNav toggleAsideButtonVisible/>
  <div class="content">
    <aside v-if="asideVisible">
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
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
    background: lightblue;
    width: 150px;
    height: 100%;
    padding: 70px 16px 16px 16px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    h2 {
      margin-bottom: 8px;
    }
    li {
      padding: 4px 0;
    }
  }
  main {
  }
}
@media (max-width: 500px) {
  .content {
    margin-left: 16px;
  }
}
</style>