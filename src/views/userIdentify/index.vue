<template>
  <div class="home-view">

    <HomeTitle/>

    <MainForm/>

  </div>
</template>
<script>
import MainForm from '@/views/userIdentify/HomeForm.vue'
import HomeTitle from '@/views/userIdentify/HomeTitle.vue'

export default {
  name: 'LoginView',
  components: { HomeTitle, MainForm }
}
</script>

<style lang="stylus">

</style>
