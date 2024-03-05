<script setup lang="ts">
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-popover.css'
import { ElPopover } from 'element-plus'
</script>

<template>
  <div flex="~ col" fixed right-7 top-120 cursor-pointer items-center>
    <div flex="~" items-end>
      <a
        class="ai-assistant-img"
        w-70px
        target="_blank"
        href="https://chatglm.cn/main/gdetail/65d70a301e6bc1f647c934e3"
      >
        <img w-80px alt="NetEase Music" src="/static/ai-assistant.png" />
      </a>

      <span text="[var(--text-color)]">
        <el-popover
          placement="left"
          title="版权声明"
          trigger="hover"
          :width="200"
        >
          <template #reference> © </template>
          <template #default>
            AI小助手
            <a
              text="图片来源"
              target="_blank"
              href="https://mastergo.com/community/resource/9252?from=card"
            />
            ，遵循
            <a
              target="_blank"
              text="「知识共享 - 署名 4.0」"
              href="https://creativecommons.org/licenses/by/4.0/"
            />
          </template>
        </el-popover>
      </span>
    </div>

    <a
      text="AI小助手"
      target="_blank"
      href="https://chatglm.cn/main/gdetail/65d70a301e6bc1f647c934e3"
    />
  </div>
</template>
