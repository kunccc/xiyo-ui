<template>
  <div ref="docWrapper" class="docWrapper">
    <TopNav topNavVisible/>
    <transition name="chMask">
      <div class="mask" v-if="asideVisible" @click="toggleAside"/>
    </transition>
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
    padding: 92px 40px 80px 262px;
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
    z-index: 8;
  }
  .chMask-enter-active, .chMask-leave-active {
    transition: opacity .3s;
  }
  .chMask-enter-from, .chMask-leave-to {
    opacity: 0;
  }
}
@media (min-width: 500px) {
  .docWrapper {
    height: 100%;
    position: relative;
    margin: 0 18vw;
    .topNav {
      position: absolute;
    }
    .aside {
      position: absolute;
    }
  }
}
</style>