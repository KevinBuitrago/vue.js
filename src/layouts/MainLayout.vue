<template>
  <div class="container">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="stylus">
  .fade-enter-active {
    transition: transform 1s, opacity 2s
  }

  .fade-enter {
    opacity 0
    transform: translateY(-40px)
  }
</style>
