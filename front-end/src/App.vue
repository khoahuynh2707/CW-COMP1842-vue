<template>
  <div id="app">
    <div v-if="message" class="notification">{{ message }}</div>
    <header class="app-header" v-if="!isAuthPage">      
      <h1>{{ $t('title') }}</h1>
      <div v-if="isLoggedIn" class="header-controls">
        <div class="lang-select">
          <select v-model="selectedLang" v-on:change="changeLocale">
            <option value="en">English</option>
            <option value="vi">Tiếng Việt</option>       
            <option value="ja">Japan</option>
          </select>
        </div>
        <button v-on:click="logout">{{ $t('Logout') }}</button>
      </div>
    </header>

    <div v-if="isLoggedIn && !isAuthPage" class="route-select">
      <select v-on:change="navigate" v-model="selectedRoute">
        <option value="/">{{ $t('home') }}</option>
        <option value="/new">{{ $t('addBook') }}</option>
        <option value="/report">{{ $t('report') }}</option>
      </select>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      selectedLang: this.$i18n.locale,
      selectedRoute: '/',
      isLogged: !!localStorage.getItem('token'),
      message: ''
    };
  },
  created() {
    this.$root.$on('loginSuccess', () => {
      this.isLogged = true;
    });
    this.$root.$on('logout', () => {
      this.isLogged = false;
    });
      this.$root.$on('showMessage', msg => {
    this.message = msg;
    setTimeout(() => {
      this.message = '';
    }, 3000);
  });
  },
  computed: {
    isLoggedIn() {
      return this.isLogged;
    },
    isAuthPage() {
      return ['Login', 'Register'].includes(this.$route.name);
    }
  },
  methods: {
    changeLocale() {
      this.$i18n.locale = this.selectedLang;
    },
    navigate() {
      if (this.selectedRoute !== this.$route.path) {
        this.$router.push(this.selectedRoute);
      }
    },
    logout() {
      localStorage.removeItem('token');
      this.isLogged = false; 
      this.$root.$emit('logout'); 
      this.$router.push({ name: 'Login' });
    }
  },
  watch: {
    $route(to) {
      if (this.isLoggedIn && !this.isAuthPage) {
        this.selectedRoute = to.path;
      }
    }
  },
  mounted() {
    if (this.isLoggedIn && !this.isAuthPage) {
      this.selectedRoute = this.$route.path;
    }
  }
};
</script>


