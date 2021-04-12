<template>
  <TopNav toggleAsideButtonVisible underlineVisible/>
  <div class="mask" :class="{asideVisible}" @click="toggleAside"/>
  <div class="content">
    <Aside/>
    <main @click="toggleAside" :class="{asideVisible}">
      <router-view/>
    </main>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
import Aside from '../components/Aside.vue';
import {inject, Ref} from 'vue';

export default {
  components: {TopNav, Aside},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAside = () => {
      asideVisible.value = false;
    };
    return {toggleAside, asideVisible};
  }
};
</script>

<style lang="scss" scoped>
.content {
  main {
    padding: 86px 30px 36px 230px;
    transition: all .3s;
  }
}
@media (max-width: 500px) {
  .content {
    main {
      height: 100vh;
      padding-left: 28px;
      transform: translateX(0);
      &.asideVisible {
        transform: translateX(200px);
        overflow: hidden;
      }
    }
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.28);
    opacity: 0;
    z-index: -1;
    &.asideVisible {
      opacity: 1;
      z-index: 8;
    }
  }
}
</style>