<template>
   <div class="col-sm-4 col-sm-offset-4">
     <h2>Sign Up</h2>
     <p>Please Sign Up to see secret quotes.</p>
     <div class="alert alert-danger" v-if="error">
       <p>{{ error }}</p>
     </div>
     <div class="form-group">
       <input
         type="text"
         class="form-control"
         placeholder="Enter your username"
         v-model="credentials.username"
       >
     </div>
     <div class="form-group">
       <input
         type="email"
         class="form-control"
         placeholder="Enter your email"
         v-model="credentials.email"
       >
     </div>
     <div class="form-group">
       <input
         type="password"
         class="form-control"
         placeholder="Enter your password"
         v-model="credentials.password"
       >
     </div>
     <button class="btn btn-primary" @click="submit()">Access</button>
   </div>
 </template>

 <script>
  import auth from '../auth'
  export default {
    data() {
      return {
        credentials: {
          username: '',
          email: '',
          password: '',
        },
        error: '',
      }
    },
    methods: {
      submit() {
        const credentials = {
          username: this.credentials.username,
          email: this.credentials.email,
          password: this.credentials.password
        };

//        auth.loginOrSignup('signup', this, credentials, 'secretquote');
        auth.loginOrSignup('signup', this, credentials);
      }
    }
  }
 </script>
