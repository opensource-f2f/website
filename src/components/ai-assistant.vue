<script setup lang="ts">
const isShow = useLocalStorage('display-ai-assistant', true)
</script>

<template>
  <div
    flex="~ col"
    fixed
    bottom-10
    right-10
    cursor-pointer
    items-center
    justify-center
  >
    <div v-if="isShow" flex="~ col" justify-center>
      <div flex>
        <a
          class="ai-assistant-img"
          w-70px
          target="_blank"
          href="https://chatglm.cn/main/gdetail/65d70a301e6bc1f647c934e3"
        >
          <img w-80px alt="AI Assistant" src="/static/ai-assistant.png" />
        </a>
        <div i-carbon-close-outline @click="isShow = false" />
      </div>
      <a
        target="_blank"
        mr-8px
        href="https://chatglm.cn/main/gdetail/65d70a301e6bc1f647c934e3"
        >AI 小助手</a
      >
    </div>

    <span
      v-else
      bg="#d4ebcb"
      border="1px [var(--text-color)]"
      h-7
      w-7
      rounded-full
      text-center
      color-black
      @click="isShow = true"
      >AI</span
    >
  </div>
</template>
