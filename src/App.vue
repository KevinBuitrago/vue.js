<template>
  <!-- Esta parte no la hemos tocado aún -->
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/"></router-link>
      |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
  #app1
    background-color gray //
  #app
    padding 60px 0
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #ffffff // Le ponemos un color de letra blanco para que resalte
    background-color #15202b // Le cambiamos el color de fondo por un azul marino oscuro
    width: 100%
</style>
