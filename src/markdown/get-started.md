# 开始使用

请先[安装](#/doc/install)本组件库。

然后引入组件。

```
import {Switch, Button, Dialog, openDialog, Tabs, Tab} from "xiyo-ui"
```

接下来就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <Button>按钮</Button>
</template>

<script lang="ts">
import {Switch, Button, Dialog, openDialog, Tabs, Tab} from 'xiyo-ui'

export default {
  components: {Button}
}
</script>
```

上一节：[安装](#/doc/install)