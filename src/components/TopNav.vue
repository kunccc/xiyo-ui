<template>
  <div class="topNav" :class="{underlineVisible}">
    <svg class="toggleAside" @click="toggleAside" v-if="toggleAsideButtonVisible">
      <use xlink:href="#icon-menu"></use>
    </svg>
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-xiyo"></use>
      </svg>
    </router-link>
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
  props: {
    toggleAsideButtonVisible: {
      type: Boolean,
      default: false
    },
    underlineVisible: {
      type: Boolean,
      default: false
    }
  },
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
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  &.underlineVisible {
    background: #fff;
    box-shadow: 0 0 1px fade-out(black, .6);
  }
  .logo {
    margin-right: auto;
    .icon {
      transform: scale(1.7);
      fill: darken(#FF8D78, 10);
    }
  }
  .menu {
    display: flex;
    li {
      margin: 0 1em;
    }
  }
  .toggleAside {
    position: absolute;
    top: 16px;
    left: 16px;
    width: 20px;
    height: 20px;
    display: none;
    fill: #FF8D78;
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