<template>
  <div class="topNav">
    <div class="toggleAside" @click="toggleAside"></div>
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {toggleAside};
  }
};
</script>

<style lang="scss" scoped>
.topNav {
  background: #FF8D78;
  color: #fff;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  .logo {
    margin-right: auto;
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