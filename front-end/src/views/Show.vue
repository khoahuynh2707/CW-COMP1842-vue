<template>
  <div v-if="book">
    <h2>{{ $t('details') }}</h2>
    <p><strong>{{ $t('titleLabel') }}:</strong> {{ book.title }}</p>
    <p><strong>{{ $t('author') }}:</strong> {{ book.author }}</p>
    <p><strong>{{ $t('genre') }}:</strong> {{ book.genre }}</p>
    <p><strong>{{ $t('year') }}:</strong> {{ book.year }}</p>
    <router-link to="/">{{ $t('backToList') }}</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      book: null
    };
  },
  async created() {
    const res = await axios.get(`http://localhost:3000/api/books/${this.$route.params.id}`);
    this.book = res.data;
  }
};
</script>