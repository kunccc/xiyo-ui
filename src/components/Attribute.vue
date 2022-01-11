<template>
  <h3>Attributes</h3>
  <table>
    <thead>
    <tr>
      <th>参数</th>
      <th>描述</th>
      <th>类型</th>
      <th>可选值</th>
      <th>默认值</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="attribute in attributes">
      <td>{{ attribute.parameter }}</td>
      <td>{{ attribute.description }}</td>
      <td>{{ attribute.type }}</td>
      <td>{{ attribute.options || '—' }}</td>
      <td>{{ attribute.default || '—' }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
export default {
  props: {
    attributes: []
  }
};
</script>

<style lang="scss" scoped>

</style>