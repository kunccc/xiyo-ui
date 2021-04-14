<demo>
不同级别
</demo>

<template>
  <span><Button level="normal">普通</Button></span>
  <span><Button level="main">主要</Button></span>
</template>

<script lang="ts">
import {Button} from '../../../lib';

export default {
  components: {Button}
};
</script>

<style lang="scss" scoped>
span {
  margin-right: 10px;
}
</style>