<template>
  <TopNav toggleAsideButtonVisible underlineVisible/>
  <div class="content">
    <Aside/>
    <main @click="toggleAside">
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
    return {toggleAside};
  }
};
</script>

<style lang="scss" scoped>
.content {
  main {
    padding: 86px 30px 36px 180px;
    transition: all .3s;
  }
}
@media (max-width: 500px) {
  .content {
    main {
      padding-left: 30px;
    }
  }
}
</style>