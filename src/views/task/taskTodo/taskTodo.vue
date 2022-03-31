<template>
  <BaseLoading v-if="isLoading"/>
  <div v-else class="taskTo-do">
    <b-button class="col-3 bottomTask" type="submit" variant="primary" size="lg">
      <img class="img1" src="@/assets/img/plus.png">Nueva Tarea
    </b-button>
    <div id="div2" class="col-12 column text-center">
        <table class="table table-striped">
        <thead>
            <tr class="trTable">
            <th scope="col">Id Tarea</th>
            <th scope="col">tarea</th>
            <th scope="col">completado</th>
            </tr>
        </thead>
        <tbody >
            <tr v-for="(item) in toDo" :key="item.id">
            <th>{{item.id}}</th>
            <td>{{item.title}}</td>
            <td><input type="checkbox" name="vehicle2" v-model="item.completed"></td>
            </tr>
        </tbody>
        </table>
    </div>
  </div>
</template>
<script>

import BaseLoading from '@/components/BaseLoading'
import { getTask } from '@/api/search'

export default {
  name: 'TaskView',
  data () {
    return {
      toDo: null,
      isLoading: true
    }
  },
  methods: {
    getTask (id) {
      this.isLoading = true
      getTask({ id })
        .then(({ data }) => {
          this.toDo = data
          this.isLoading = false
          console.log('esooo --->', data)
        })
        .catch()
    }
  },
  components: {
    BaseLoading
  },
  created () {
    this.getTask(this.$route.params.id)
  }
}
</script>
<style scoped>
.bottomTask{
    margin-bottom: 3vw;
    margin-Left: 3vw;
    margin-top: 0%;
}
#div2{
    overflow-x: auto;
    height: 79vm;
}
</style>
