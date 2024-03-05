<script setup lang="ts">
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-popover.css'
import { ElIcon, ElPopover } from 'element-plus'
import { CircleClose } from '@element-plus/icons-vue'

const isShow = ref(true)
</script>

<template>
  <div flex="~ col" fixed right-10 top-120 cursor-pointer items-center>
    <div v-if="isShow">
      <el-icon :size="20" position-absolute right-0 @click="isShow = false">
        <CircleClose />
      </el-icon>
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
        class="textsdsd"
        text="@ AI小助手"
        target="_blank"
        href="https://chatglm.cn/main/gdetail/65d70a301e6bc1f647c934e3"
      />
    </div>

    <span v-else class="min-icon" @click="isShow = true">AI</span>
  </div>
</template>

<style scoped>
.min-icon {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  line-height: 25px;
  font-size: 14px;
  text-align: center;
  border: 1px solid var(--text-color);
  color: #000;
  background-color: #d4ebcb;
}
</style>
