<template>
  <div class="aside" :class="{asideVisible}">
    <p>文档</p>
    <ol>
      <li>
        <router-link to="/doc/intro">介绍</router-link>
      </li>
      <li>
        <router-link to="/doc/install">安装</router-link>
      </li>
      <li>
        <router-link to="/doc/get-started">开始使用</router-link>
      </li>
    </ol>
    <p>组件列表</p>
    <ol>
      <li>
        <router-link to="/doc/switch">Switch 开关</router-link>
      </li>
      <li>
        <router-link to="/doc/button">Button 按钮</router-link>
      </li>
      <li>
        <router-link to="/doc/dialog">Dialog 对话框</router-link>
      </li>
      <li>
        <router-link to="/doc/tabs">Tabs 标签页</router-link>
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return {asideVisible};
  }
};
</script>

<style lang="scss" scoped>
.aside {
  background: #fff;
  min-width: 223px;
  min-height: 100vh;
  height: 100%;
  padding: 72px 28px 28px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  box-shadow: 1px 0 1px rgba(0, 0, 0, .1);
  transition: all .3s;
  p {
    font-size: 22px;
    margin: 20px 0 10px;
  }
  li {
    padding: 6px 0;
    color: #888;
    transition: all 250ms ease;
    &:hover {
      color: #FF8D78;
    }
    .router-link-active {
      color: #FF8D78;
    }
  }
}
@media (max-width: 500px) {
  .aside {
    transform: translateX(-200px);
    &.asideVisible {
      transform: translateX(0);
    }
  }
}
@media (min-width: 500px) {
  .aside {
    left: 18vw;
  }
}
</style>