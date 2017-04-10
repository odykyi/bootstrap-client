<!--components/User.vue-->
<template lang="html">
  <div class="col-sm-6 col-sm-offset-3">
      <h1>Get a Secret Chuck Norris User!</h1>
      <button class="btn btn-warning" v-on:click="getUsers()">Get a Users</button>
      <div class="quote-area" v-if="users">
        <!--<h2><blockquote>{{ users }}</blockquote></h2>-->
        <table class="table table-responsive table-stripped">
          <thead>
            <tr>
              <td>id</td>
              <td>username</td>
              <td>email</td>
              <td>createdAt</td>
              <td>updatedAt</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users">
                <td>{{ user.id }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.createdAt }}</td>
                <td>{{ user.updatedAt }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
import auth from '../auth';
import axios from 'axios';
export default {
  data() {
    return {
      users: ''
    }
  },
  methods: {
    getUsers() {
      axios.get('http://localhost:1337/users', {
        transformRequest: [function (data) {
          // Do whatever you want to transform the data

          return data;
        }],

        // `transformResponse` allows changes to the response data to be made before
        // it is passed to then/catch
        transformResponse: [function (data) {
          // Do whatever you want to transform the data
          return JSON.parse(data).data;
        }],
        headers: auth.getAuthHeader()
      })
        .then((response) => {
          this.users = response.data;
        })
        .catch((err) => { console.log(err) })
    }
  },
  route: {
    beforeEnter() {
      return auth.user.authenticated;
    }
  }
}
</script>

<style lang="css">
</style>
