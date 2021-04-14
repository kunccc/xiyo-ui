<template>
  <div ref="docWrapper" class="docWrapper">
    <TopNav toggleAsideButtonVisible underlineVisible/>
    <div class="mask" :class="{asideVisible}" @click="toggleAside"/>
    <div class="content">
      <Aside/>
      <main @click="toggleAside" :class="{asideVisible}">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
import Aside from '../components/Aside.vue';
import {inject, onMounted, Ref, ref} from 'vue';

export default {
  components: {TopNav, Aside},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAside = () => {
      asideVisible.value = false;
    };
    const docWrapper = ref<HTMLDivElement>(null);
    onMounted(() => {
      docWrapper.value.addEventListener('wheel', e => {
        if (asideVisible.value) e.preventDefault();
      });
      docWrapper.value.addEventListener('touchmove', e => {
        if (asideVisible.value) e.preventDefault();
      });
    });
    return {toggleAside, asideVisible, docWrapper};
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
      padding-left: 28px;
      &.asideVisible {
        transform: translateX(200px);
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
@media (min-width: 1200px) {
  .docWrapper {
    height: 100%;
    position: relative;
    margin: 0 200px;
    .topNav {
      position: absolute;
    }
    .aside {
      position: absolute;
    }
  }
}
</style>