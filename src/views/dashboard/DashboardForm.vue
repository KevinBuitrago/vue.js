<template>
  <BaseLoading v-if="isLoading"/>
  <div v-else class="row" style="margin-top: -5%;">
        <div class="col-2">
      <div class=" dashboard-sideBar">
        <div class="col-2">
          <h2>System</h2>
        </div>
        <div class="row col-12" style="color: black; margin-left: 5%;">
          <div class="col-3"  >
            <img style="width:125%" src="@/assets/img/usuarios_blue.png">
          </div>
          <div class="col-5 user">
            Users
          </div>
        </div>
      </div>
    </div>
    <div class="col-10">
      <div class="col-12 dashboard-title">
        <div>
        <div class="col-2 imgProfile">
        </div>
        <div style="color:black">Marlene Sasoeur</div>
        </div>
      </div>
        <b-button class="col-3 buttonD" type="submit" variant="primary" size="lg">
      <img class="img1" src="@/assets/img/plus.png">Nuevo Usuario</b-button>
      <div class="col-12 tableD">
        <h4  class="col-8">Users</h4>
        <div id="div1" class="col-12 column">
          <table class="table table-striped">
            <thead>
              <tr class="trTable">
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">Dirección</th>
                <th scope="col">Compañía</th>
                <th scope="col">Options</th>
              </tr>
            </thead>
            <tbody >
              <tr v-for="(item) in users" :key="item.id">
                <th scope="row">{{item.id}}</th>
                <td>{{item.name}}</td>
                <td>{{item.username}}</td>
                <td>{{item.email}}</td>
                <td>{{item.address.city}}{{item.address.street}}{{item.address.suite}} </td>
                <td>{{item.company.name}}</td>
                <td class="tdTable" v-on:click="goTaskTodo(item.id)">View todos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- <h1 class="my-6"> </h1> -->
  <!-- <h1 class="my-6"> -->
  </div>
</template>

<script>
import BaseLoading from '@/components/BaseLoading'
import { getUsers } from '@/api/search'

export default {
  name: 'MainForm',
  data () {
    return {
      users: null,
      isLoading: true
    }
  },
  computed: {

  },
  methods: {
    fetchData () {
      this.users = []
      this.isLoading = true
      getUsers()
        .then(({ data }) => {
          this.users = data
          this.isLoading = false
        })
        .catch()
    },
    goTaskTodo (id) {
      this.$router.push({ name: 'task/taskTodo', params: { id } })
    }
  },
  components: {
    BaseLoading
  },
  created () {
    this.fetchData()
  }
}
</script>
