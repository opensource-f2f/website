<script setup lang="ts">
const isShow = ref(true)
</script>

<template>
  <div flex="~ col" fixed right-10 top-120 cursor-pointer items-center>
    <div v-if="isShow">
      <div
        i-carbon-close-outline
        position-absolute
        right-0
        @click="isShow = false"
      />
      <a
        class="ai-assistant-img"
        w-70px
        target="_blank"
        href="https://chatglm.cn/main/gdetail/65d70a301e6bc1f647c934e3"
      >
        <img w-80px alt="NetEase Music" src="/static/ai-assistant.png" />
      </a>
      <a
        text="@ AI小助手"
        target="_blank"
        mr-8px
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
