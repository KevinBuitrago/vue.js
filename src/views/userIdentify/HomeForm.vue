<template>
  <div class="search-form formB">

    <div class="row">
      <div class="col-12 col-md-8 offset-md-2 dateForm">
        <b-form @submit.prevent="onSubmit">

          <b-form-group
            id="input-group-1"
            label="Usuario:"
            label-for="input-text"
          >
            <b-form-input
              id="input-text"
              v-model="form.user"
              v-focus
              type="text"
              size="lg"
              required
              placeholder="BattleTag"
            />
          </b-form-group>
             <b-form-group
            id="input-group-1"
            label="Contraseña:"
            label-for="input-text"
          >
            <b-form-input
              id="input-text"
              v-model="form.password"
              v-focus
              type="password"
              size="lg"
              required
              placeholder="BattleTag"
            />
          </b-form-group>

          <div class="d-flex justify-content-end mt-5">
            <b-button type="submit" variant="primary" size="lg">Iniciar Sesion</b-button>
          </div>

        </b-form>
      </div>
    </div>

  </div>
</template>

<script>

import { usuarios } from '@/utils/users'

export default {
  name: 'MainForm',
  data () {
    return {
      form: {}
    }
  },
  computed: {
    user () {
      return usuarios
    }
  },
  methods: {
    onSubmit () {
      const users = this.user
      let login = false
      const { user, password } = this.form
      for (let index = 0; index < users.length; index++) {
        if (user === users[index].user) {
          if (password === users[index].password) {
            login = true
          }
        }
      }
      if (login) {
        this.$router.push({ name: 'dashboard', params: { id: '1' } })
      } else {
        alert('usuario o contraseña incorecta')
      }
    }
  }
}
</script>
