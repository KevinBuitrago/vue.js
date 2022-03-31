<template>
  <div class="home">
    <div >
    <TablaD/>
    </div>
  </div>
</template>

<script>

import TablaD from '@/views/dashboard/DashboardForm.vue'

export default {
  name: 'HomeView',
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
  },
  created () {
  },
  components: {
    TablaD
  }
}
</script>
