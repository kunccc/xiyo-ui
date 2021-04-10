<template>
  <TopNav toggleAsideButtonVisible underlineVisible/>
  <div class="content">
    <Aside/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
import Aside from '../components/Aside.vue';

export default {
  components: {TopNav, Aside},
};
</script>

<style lang="scss" scoped>
.content {
  margin: 66px 16px 16px 166px;
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