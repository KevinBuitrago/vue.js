<template>
  <BaseLoading v-if="isLoading"/>
  <div v-else class="taskTo-do">
    <div v-if="isCreateTask" id="div2" class="col-12 column text-center">
      <b-button v-on:click="changeView(false)" class="col-3 bottomTask" type="submit" variant="primary" size="lg">
      <img class="img1" src="@/assets/img/plus.png">Nueva Tarea
    </b-button>
        <table class="table table-striped">
        <thead>
            <tr class="trTable">
            <th scope="col">Id Tarea</th>
            <th scope="col">Tarea</th>
            <th scope="col">Completado</th>
            <th style="width: 25%" scope="col">Eliminar</th>
            </tr>
        </thead>
        <tbody >
            <tr v-for="(item) in toDo" :key="item.id">
            <th>{{item.id}}</th>
            <td>{{item.title}}</td>
            <td><input type="checkbox" name="vehicle2" v-model="item.completed"></td>
            <td v-on:click="deleteTask(item.id)"><img style="width: 12%; cursor: pointer;" src="@/assets/img/basura.png" alt="iconTrash"></td>
            </tr>
        </tbody>
        </table>
    </div>
    <div v-else id="div2" class="col-12 nn text-center">
        <h5   class="col-8"> holas</h5>
        <h5   class="col-8"> holas</h5>
        <h5   class="col-8"> holas</h5>
        <h5   class="col-8"> holas</h5>

        <div class="col-12 column">
          <b-form @submit.prevent="createdTask()">
            <div class="col-12" id="input-group-1">
              <b-form-group class="col-12 group cajon1" label="Tarea:" label-for="input-name">
                <b-form-input autocomplete="off" id="input-name" v-model="form.name" v-focus type="text" size="lg" required />
              </b-form-group>
            </div>
            <div class="col-12" style="padding-left: 31%;">
              <b-button class="bottomTa cajon1 btn btn-secondary" v-on:click="changeView(true)" variant="primary" size="lg">Regresar</b-button>
              <b-button class="bottomTa cajon2" type="submit" variant="primary" size="lg">Crear Tarea</b-button>
            </div>
          </b-form>
        </div>
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
      isLoading: true,
      isCreateTask: true,
      form: {
        name: ''
      }
    }
  },
  methods: {
    getTask (id) {
      this.isLoading = true
      getTask({ id })
        .then(({ data }) => {
          this.toDo = data
          this.isLoading = false
        })
        .catch()
    },
    deleteTask (id) {
      const arryCopy = []
      for (const key in this.toDo) {
        if (this.toDo[key].id !== id) {
          arryCopy.push(this.toDo[key])
        }
      }
      console.log(arryCopy, 'arryCopy')
      this.toDo = arryCopy
    },
    createdTask () {
      const leg = this.toDo.length - 1
      const newTask = {
        id: this.toDo[leg].id + 1,
        userId: this.toDo[leg].userId,
        title: this.form.name,
        completed: false
      }
      this.toDo.push(newTask)
      this.changeView(true)
      this.form.name = ''
    },
    changeView (view) {
      this.isCreateTask = view
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
.bottomTa{
    margin-Left: 3vw;
    margin-top: 9%;
}
#div2{
    overflow-x: auto;
    height: 79vm;
}
.nn{
    height: 38.2vw;
  Width: 62vw;
  margin-Left: 12vw;
  margin-top: 3%;
  border-radius: 5px;
  background-color: white;
}
</style>
