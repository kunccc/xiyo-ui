<template>
  <div class="topNav" :class="{underlineVisible}">
    <div title="菜单" :class="{asideVisible}">
      <svg class="toggleAside" @click="toggleAside" v-if="toggleAsideButtonVisible">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </div>
    <router-link to="/" class="logo" title="首页" v-if="toggleAsideButtonVisible">
      <svg class="icon">
        <use xlink:href="#icon-xiyo"></use>
      </svg>
    </router-link>
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
    return {toggleAside, asideVisible};
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
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }
  .logo {
    margin-left: 16px;
    .icon {
      transform: scale(1.4);
      fill: darken(#FF8D78, 10);
    }
  }
  .toggleAside {
    position: absolute;
    top: 16px;
    left: 28px;
    width: 20px;
    height: 20px;
    display: none;
    fill: #666;
    cursor: pointer;
    transition: all .25s;
  }
  .asideVisible {
    .toggleAside {
      fill: #FF8D78;
    }
  }
  @media (max-width: 500px) {
    .logo {
      margin: 0 auto;
    }
    .toggleAside {
      display: inline-block;
    }
  }
}
</style>