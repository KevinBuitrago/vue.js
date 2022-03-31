<template>
  <BaseLoading v-if="isLoading"/>
  <div v-else class="row" style="margin-top: -5%;">
        <div class="col-2">
      <div class=" dashboard-sideBar">
        <div class="col-2">
          <h2>System</h2>
        </div>
        <div v-on:click="changeView(true)" class="row col-12" style="color: black; margin-left: 5%; cursor: pointer">
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
      <div v-if="isCreate">
        <b-button v-on:click="changeView(false)" class="col-3 buttonD" type="submit" variant="primary" size="lg">
          <img class="img1" src="@/assets/img/plus.png">
          Nuevo Usuario
        </b-button>
        <div  class="col-12 tableD">
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
      <div v-else class="col-12 tableD">
        <h5   class="col-8"> holas</h5>
        <div class="col-12 column">
          <b-form @submit.prevent="createdUser()">
            <div class="col-12" id="input-group-1">
              <b-form-group class="col-6 group cajon1" label="Nombre:" label-for="input-name">
                <b-form-input autocomplete="off" id="input-name" v-model="form.name" v-focus type="text" size="lg" required />
              </b-form-group>
              <b-form-group  class="col-6 group cajon2" label="Apellido:" label-for="input-lastName" >
                <b-form-input autocomplete="off" id="input-lastName" v-model="form.username" v-focus type="text" size="lg" required />
              </b-form-group>
              <b-form-group class="col-6 group cajon1" label="correo:" label-for="input-email">
                <b-form-input id="input-email" v-model="form.email" v-focus type="text" size="lg" required />
              </b-form-group>
              <b-form-group  class="col-6 group cajon2" label="Compañía:" label-for="input-company" >
                <b-form-input id="input-company" v-model="form.company" v-focus type="text" size="lg" required />
              </b-form-group>
              <b-form-group class="col-6 group cajon1" label="Ciudad:" label-for="input-address">
                <b-form-input id="input-address" v-model="form.address.city" v-focus type="text" size="lg" required />
              </b-form-group>
              <b-form-group class="col-6 group cajon2" label="Barrio:" label-for="input-address">
                <b-form-input id="input-address" v-model="form.address.street" v-focus type="text" size="lg" required />
              </b-form-group>
              <b-form-group class="col-12 group cajon1" label="Calle:" label-for="input-address">
                <b-form-input id="input-address" v-model="form.address.suite" v-focus type="text" size="lg" required />
              </b-form-group>

              <b-button class="bottomC" type="submit" variant="primary" size="lg">Crear Usuario</b-button>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseLoading from '@/components/BaseLoading'
import { getUsers } from '@/api/search'

export default {
  name: 'MainForm',
  data () {
    return {
      idNew: 1,
      users: null,
      isLoading: true,
      isCreate: true,
      form: {
        id: 1,
        address: { }
      }
    }
  },
  computed: {},
  methods: {
    fetchData () {
      this.users = []
      this.isLoading = true
      getUsers()
        .then(({ data }) => {
          this.users = data
          this.idNew = this.users.length + 1
          this.isLoading = false
        })
        .catch()
    },
    goTaskTodo (id) {
      this.$router.push({ name: 'task/taskTodo', params: { id } })
    },
    createdUser () {
      this.form.id = this.idNew
      this.users.push(this.form)
      this.changeView(true)
    },
    changeView (view) {
      this.isCreate = view
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
