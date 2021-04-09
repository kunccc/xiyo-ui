<template>
  <div class="topNav">
    <div @click="toggleAside">
      <svg class="icon">
        <use xlink:href="#icon-xiyo"></use>
      </svg>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAside = () => {
      console.log('fuck');
      asideVisible.value = !asideVisible.value;
    };
    return {toggleAside};
  }
};
</script>

<style lang="scss" scoped>
.topNav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  .icon {
    margin-right: auto;
    transform: scale(1.7);
    fill: darken(#FF8D78, 10);
  }
  .menu {
    display: flex;
    li {
      margin: 0 1em;
    }
  }
  .toggleAside {
    border: 1px solid red;
    position: absolute;
    top: 16px;
    left: 16px;
    width: 20px;
    height: 20px;
    display: none;
  }
  @media (max-width: 500px) {
    .menu {
      display: none;
    }
    .logo {
      margin: 0 auto;
    }
    .toggleAside {
      display: inline-block;
    }
  }
}
</style>