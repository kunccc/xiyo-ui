<template>
  <button class="xiyo-switch" @click="toggle" :class="{'xiyo-checked': value}"><span></span></button>
</template>

<script lang="ts">
export default {
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return {toggle};
  }
};
</script>

<style lang="scss">
.xiyo-switch {
  width: 44px;
  height: 22px;
  border: none;
  border-radius: 11px;
  background: grey;
  position: relative;
  span {
    width: 18px;
    height: 18px;
    border-radius: 18px;
    background: #fff;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: all .3s;
  }
  &.xiyo-checked {
    background: #FF8D78;
    span {
      left: 24px;
    }
  }
  &:focus {
    outline: none
  }
  &:active {
    span {
      width: 22px;
    }
  }
  &.xiyo-checked:active {
    span {
      width: 22px;
      margin-left: -4px;
    }
  }
}
</style>