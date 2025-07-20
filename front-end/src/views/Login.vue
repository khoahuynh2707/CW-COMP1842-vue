<template>
  <div class="login-container">
    <h2>Welcome to Vue Web</h2>
    <p>Design by Huynh Anh Khoa</p>

    <form v-on:submit.prevent="handleLogin">
      <label for="username">Username</label>
      <input id="username" v-model="username" type="text" required />

      <label for="password">Password</label>
      <input id="password" v-model="password" type="password" required />

      <button type="submit">Login</button>
    </form>

    <p v-if="error" class="error-message">{{ error }}</p>

    <p class="register-link">
      Don't have an account? 
      <router-link to="/register">register</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post('http://localhost:3000/api/auth/login', {
          username: this.username,
          password: this.password
        });
        localStorage.setItem('token', response.data.token);
        this.$root.$emit('loginSuccess');
        this.$router.push({ name: 'Home' });
      } catch (err) {
        this.error = this.$t('loginFailed');
      }
    }
  }
};
</script>


