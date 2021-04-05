<template>
  <div class="topNav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.topNav {
  background: #FF8D78;
  color: #fff;
  display: flex;
  padding: 16px;
  .logo {
    margin-right: auto;
  }
  .menu {
    display: flex;
    li {
      margin: 0 1em;
    }
  }
}
</style>