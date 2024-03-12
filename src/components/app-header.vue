<template>
  <header style="background: var(--header-bg)">
    <app-navbar />
    <div flex="~ row none" relative h-240px w-full justify-center>
      <div flex="~ col gap-16px" items-center justify-center>
        <router-link :to="{ name: 'Index' }">
          <img
            h-100px
            w-100px
            rounded-2
            src="/static/logo.png"
            alt="开源面对面"
          />
        </router-link>
        <span>开源面对面，连接热爱开源的你！</span>
        <banner />
      </div>
    </div>
  </header>
</template>
