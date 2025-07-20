<template>
  <div class="register-container">
    <h2>Register</h2>

    <form v-on:submit.prevent="handleRegister">
      <label for="username">Username</label>
      <input id="username" v-model="username" type="text" required />

      <label for="password">Password</label>
      <input id="password" v-model="password" type="password" required />

      <button type="submit">Register</button>
    </form>

    <p v-if="message" class="register-message">{{message}}</p>

    <p class="login-link">
      Have an account?
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      username: '',
      password: '',
      message: ''
    };
  },
  methods: {
    async handleRegister() {
      try {
        const res = await axios.post('http://localhost:3000/api/auth/register', {
          username: this.username,
          password: this.password
        });
        this.message = this.$t('register Successful!!');
      } catch (err) {
        this.message = this.$t('User has already exist or invalid');
      }
    }
  }
};
</script>
