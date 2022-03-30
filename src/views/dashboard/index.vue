<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <b-button v-on:click="getTask" >task Users</b-button>
  </div>
</template>

<script>
import { getTask, getUsers } from '@/api/search'

export default {
  name: 'HomeView',
  methods: {
    fetchData () {
      getUsers()
        .then(({ data }) => {
          console.log('esooo --->', data)
        })
        .catch()
    },
    getTask () {
      const id = '1'
      getTask({ id })
        .then(({ data }) => {
          console.log('esooo --->', data)
        })
        .catch()
    }
  },
  created () {
    this.fetchData()
  },
  components: {
  }

}

</script>
