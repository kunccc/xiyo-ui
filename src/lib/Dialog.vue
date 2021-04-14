<template>
  <div ref="dialog">
    <transition name="overlay">
      <div v-if="visible" class="xiyo-dialog-overlay" @click="onClickOverlay"/>
    </transition>
    <transition name="wrapper">
      <div v-if="visible" class="xiyo-dialog-wrapper">
        <header>
          <span>{{ title }}</span>
          <span @click="close" class="xiyo-dialog-close"/>
        </header>
        <main>
          <slot/>
        </main>
        <footer>
          <span><Button @click="cancel">取消</Button></span>
          <span><Button level="main" @click="ok">确定</Button></span>
        </footer>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Button from './Button.vue';
import {onMounted, ref} from 'vue';

export default {
  components: {Button},
  props: {
    title: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    },
    closeOnOverlay: {
      type: Boolean,
      default: false
    },
    ok: {
      type: Function
    },
    cancel: {
      type: Function
    }
  },
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false);
    };
    const onClickOverlay = () => {
      if (props.closeOnOverlay) close();
    };
    const ok = () => {
      if (props.ok) props.ok();
      close();
    };
    const cancel = () => {
      if (props.cancel) props.cancel();
      close();
    };
    const dialog = ref<HTMLDivElement>(null);
    onMounted(() => {
      dialog.value.addEventListener('touchmove', e => {
        if (props.visible) e.preventDefault();
      });
      dialog.value.addEventListener('wheel', e => {
        if (props.visible) e.preventDefault();
      });
    });
    return {close, onClickOverlay, ok, cancel, dialog};
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
  transition: all .3s;
}
.xiyo-dialog-wrapper {
  min-width: 300px;
  max-width: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 3px fade_out(#FF8D78, 0.5);
  header {
    padding: 14px 16px;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  main {
    padding: 12px 16px;
    font-size: 16px;
    color: #555;
  }
  footer {
    padding: 14px 16px;
    text-align: right;
    span {
      margin-left: 10px;
    }
  }
  .xiyo-dialog-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    transition: all .3s;
    &:hover {
      transform: rotate(90deg);
    }
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
.overlay-enter-active, .overlay-leave-active,
.wrapper-enter-active, .wrapper-leave-active {
  transition: all .25s;
}
.overlay-enter-from, .overlay-leave-to {
  opacity: 0;
}
.wrapper-enter-from, .wrapper-leave-to {
  transform: translate(-50%, -50%) translateY(-16px);
  opacity: 0;
}
</style>