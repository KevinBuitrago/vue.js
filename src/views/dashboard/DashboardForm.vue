<template>
  <div class="row" style="    margin-top: -5%;">
        <div class="col-2">
      <div class=" dashboard-sideBar">
      </div>
    </div>
    <div class="col-10">
      <div class="col-12 dashboard-title">
      </div>
        <b-button class="col-3 buttonD" type="submit" variant="primary" size="lg">
      <img alt="Vue logo" src="@/assets/img/plus.png">  Add new user</b-button>
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
                    <td class="tdTable" v-on:click="getTask(item.id)">View todos</td>
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

import { getUsers, getTask } from '@/api/search'

export default {
  name: 'MainForm',
  data () {
    return {
      users: null
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
          console.log('esooo1 --->', data)
        })
        .catch()
    },
    getTask (id) {
      this.isLoading = true
      getTask({ id })
        .then(({ data }) => {
          this.isLoading = false
          console.log('esooo --->', data)
        })
        .catch()
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
<style scoped>
h4{
    line-height: 79px;
    letter-spacing: 0px;
    text-align: left;
    color: black;
}
  .my-6{
    margin-top: 1.95rem !important;
  }
img{
    width: 11%;
}
.buttonD{
 margin-Left: 7vw;
  margin-top: 3%;
}
.table{
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  background-color: white;
}
.trTable {
  color: #9B9EAC
}
.tdTable{
  color: #5977FF
}
#div1 {
     overflow-x:auto;
     height: 79%;
}
  .dashboard-sideBar{
    Width:245px;
    Height: 52vw;
    margin-left: -7vw;
    background-color: white;
  }
  .dashboard-title{
    Width: 62vw;
    Height:74px;
    margin-Left: 7vw;
    background-color: white;
  }
  .tableD{
    height: 38.2vw;
    Width: 62vw;
    margin-Left: 7vw;
    margin-top: 3%;
    border-radius: 5px;
    background-color: white;

  }
</style>
