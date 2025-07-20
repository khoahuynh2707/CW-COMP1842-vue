<template>
  <div>
    <h2>{{ $t('report') }}</h2>
    <p>{{ $t('totalBooks') }}: {{ books.length }}</p>

    <ul>
      <li v-for="book in books" :key="book._id">
        <strong>{{ book.title }}</strong> - {{ book.author }} ({{ book.genre }}, {{ book.year }})
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      books: []
    };
  },
  async created() {
    const res = await axios.get('http://localhost:3000/api/books');
    this.books = res.data;
  }
};
</script>
