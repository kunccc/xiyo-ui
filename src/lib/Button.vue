<template>
  <button class="xiyo-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="xiyo-loadingIndicator"/>
    <slot/>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  props: {
    theme: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    },
    level: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const {theme, size, level} = props;
    const classes = computed(() => {
      return {
        [`xiyo-theme-${theme}`]: theme,
        [`xiyo-size-${size}`]: size,
        [`xiyo-level-${level}`]: level,
      };
    });
    return {classes};
  }
};
</script>

<style lang="scss">
$color-xiyo: #409eff;
$color-danger: #ff4d4f;
.xiyo-button {
  height: 30px;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  margin-left: 8px;
  transition: background .3s;
  &:hover,
  &:focus {
    color: $color-xiyo;
    border-color: $color-xiyo;
    outline: none;
  }
  &::-moz-focus-inner { /*firefox 对 focus 边框处理*/
    border: 0;
  }
  &.xiyo-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $color-xiyo;
    &:hover, &:focus {
      color: lighten($color-xiyo, 10%);
    }
  }
  &.xiyo-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover, &:focus {
      background: lighten(#fff, 5%);;
    }
  }
  &.xiyo-size-big {
    font-size: 24px;
    height: 46px;
    padding: 0 18px
  }
  &.xiyo-size-small {
    font-size: 12px;
    height: 22px;
    padding: 0 6px;
  }
  &.xiyo-theme-button {
    &.xiyo-level-main {
      background: $color-xiyo;
      color: white;
      border-color: $color-xiyo;
      &:hover,
      &:focus {
        background: lighten($color-xiyo, 10%);
        border-color: lighten($color-xiyo, 10%);
      }
    }
    &.xiyo-level-danger {
      background: $color-danger;
      border-color: $color-danger;
      color: #fff;
      &:hover,
      &:focus {
        background: lighten($color-danger, 10%);
        border-color: lighten($color-danger, 10%);
      }
    }
  }
  &.xiyo-theme-link {
    &.xiyo-level-danger {
      color: $color-danger;
      &:hover,
      &:focus {
        color: lighten($color-danger, 10%);
      }
    }
  }
  &.xiyo-theme-text {
    &.xiyo-level-main {
      color: $color-xiyo;
      &:hover,
      &:focus {
        color: lighten($color-xiyo, 10%);
      }
    }
    &.xiyo-level-danger {
      color: $color-danger;
      &:hover,
      &:focus {
        color: lighten($color-danger, 10%);
      }
    }
  }
  &.xiyo-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: grey;
      &:hover {
        border-color: #aaa;
      }
    }
  }
  &.xiyo-theme-link, &.xiyo-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: grey;
    }
  }
  .xiyo-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $color-xiyo $color-xiyo $color-xiyo transparent;
    border-style: solid;
    border-width: 2px;
    animation: xiyo-spin 1s infinite linear;
  }
}
@keyframes xiyo-spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}
</style>