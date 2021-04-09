# 开始使用

请先[安装](#/doc/install)本组件库。

然后引入组件。

```
import {Button, Tabs, Switch, Dialog} from "xiyo-ui"
```

接下来就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
    <div>
        <Button>按钮</Button>
    </div>
</template>

<script lang="ts">
import {Button, Tabs, Switch, Dialog} from 'xiyo-ui'

export default {
    components: {Button}
}
</script>
```