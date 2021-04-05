<template>
  <TopNav/>
  <div class="banner">
    <h1>西柚 UI</h1>
    <h2>一个轻量级 UI 框架</h2>
    <p class="actions">
      <a href="https://www.github.com">Github</a>
      <router-link to="/doc">开始</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';

export default {
  components: {TopNav}
};
</script>

<style lang="scss" scoped>
.banner {
  text-align: center;
  margin-top: 100px;
  .actions {
    padding-top: 50px;
    a {
      background: #FF8D78;
      color: #fff;
      padding: 4px 10px;
      margin: 0 10px;
      border-radius: 16px;
    }
  }
}
</style>