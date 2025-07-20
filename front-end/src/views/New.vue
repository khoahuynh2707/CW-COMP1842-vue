<template>
  <div>
    <h2>{{ $t('addBook') }}</h2>
    <WordForm :submitText="$t('submit')" v-on:submit="createBook" />
  </div>
</template>

<script>
import WordForm from '../components/WordForm.vue';
import axios from 'axios';

export default {
  components: { WordForm },
  methods: {
    async createBook(bookData) {
      await axios.post('http://localhost:3000/api/books', bookData);
      this.$router.push('/');
    }
  }
};
</script>
