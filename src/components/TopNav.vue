<template>
  <div class="topNav" v-if="topNavVisible">
    <div title="菜单" :class="{asideVisible}">
      <Icon name="menu" class="toggleAside" @click="toggleAside"/>
    </div>
    <router-link to="/" class="logo" title="首页">
      <Icon name="xiyo"/>
      <img src="../assets/xiyo-logo.png">
    </router-link>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';
import Icon from './Icon.vue';

export default {
  props: {
    topNavVisible: {
      type: Boolean,
      default: false
    }
  },
  components: {Icon},
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
  padding: 16px 16px 12px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 57px;
  z-index: 10;
  background: #fff;
  border-bottom: 1px solid #ddd;
  .logo {
    .icon {
      width: 24px;
      height: 24px;
      margin: 0 10px;
    }
    img {
      width: 48px;
      height: 16px;
      transform: translateY(1px);
    }
  }
  .toggleAside {
    position: absolute;
    top: 18px;
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
      margin: 4px auto 0;
    }
    img {
      display: none;
    }
    .toggleAside {
      top: 14px;
      display: inline-block;
    }
  }
}
@media (min-width: 500px) {
  .topNav {
    width: 64vw;
    left: 18vw;
  }
}
</style>