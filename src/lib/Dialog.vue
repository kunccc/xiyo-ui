<template>
  <template v-if="visible">
    <div class="xiyo-dialog-overlay"></div>
    <div class="xiyo-dialog-wrapper">
      <header>标题 <span class="xiyo-dialog-close"/></header>
      <main>
        <p>第一行字</p>
        <p>第二行字</p>
      </main>
      <footer>
        <Button level="main">OK</Button>
        <Button>Cancel</Button>
      </footer>
    </div>
  </template>
</template>

<script lang="ts">
import Button from './Button.vue';

export default {
  components: {Button},
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.xiyo-dialog-overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: fade_out(black, 0.6);
}
.xiyo-dialog-wrapper {
  min-width: 15em;
  max-width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 0 3px fade_out(black, 0.6);
  header {
    padding: 12px 16px;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  main {
    padding: 12px 16px;
  }
  footer {
    padding: 12px 16px;
    text-align: right;
  }
  .xiyo-dialog-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>