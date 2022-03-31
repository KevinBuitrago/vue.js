<template>
  <div class="home">
    <BaseLoading v-if="isLoading"/>
    <div v-else>
    <TablaD/>
    </div>
  </div>
</template>

<script>
import BaseLoading from '@/components/BaseLoading'
import { getTask } from '@/api/search'
import TablaD from '@/views/dashboard/DashboardForm.vue'

export default {
  name: 'HomeView',
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    getTask () {
      this.isLoading = true
      const id = '1'
      getTask({ id })
        .then(({ data }) => {
          this.isLoading = false
          console.log('esooo --->', data)
        })
        .catch()
    }
  },
  created () {
  },
  components: {
    BaseLoading,
    TablaD
  }
}
</script>
