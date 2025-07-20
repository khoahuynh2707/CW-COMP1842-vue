<template>
  <div>
    <div class="filters">
      <input v-model="filterTitle" :placeholder="$t('titleLabel') + '...'" />
      <select v-model="filterGenre">
        <option value="">{{ $t('genre') }}</option>
        <option v-for="genre in uniqueGenres" :key="genre" :value="genre">
          {{ genre }}
        </option>
      </select>
    </div>

    <ul v-if="filteredBooks.length">
      <li v-for="book in filteredBooks" :key="book._id">
        <strong>{{ book.title }}</strong> - {{ book.author }} ({{ book.genre }}, {{ book.year }})<br />
        <router-link :to="`/show/${book._id}`">{{ $t('show') }}</router-link> 
        <router-link :to="`/edit/${book._id}`">{{ $t('edit') }}</router-link> 
        <button v-on:click="deleteBook(book._id)">{{ $t('delete') }}</button>
      </li>
    </ul>
    <p v-else>{{ $t('noBooks') }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      books: [],
      filterTitle: '',
      filterGenre: ''
    };
  },
  computed: {
    filteredBooks() {
      return this.books.filter(book => {
        const matchesTitle = book.title.toLowerCase().includes(this.filterTitle.toLowerCase());
        const matchesGenre = this.filterGenre ? book.genre === this.filterGenre : true;
        return matchesTitle && matchesGenre;
      });
    },
    uniqueGenres() {
      const genres = this.books.map(book => book.genre).filter(Boolean);
      return [...new Set(genres)].sort();
    }
  },
  mounted() {
    this.fetchBooks();
  },
  methods: {
    async fetchBooks() {
      const res = await axios.get('http://localhost:3000/api/books');
      this.books = res.data;
    },
    async deleteBook(id) {
      if (confirm(this.$t('delete') + '?')) {
        await axios.delete(`http://localhost:3000/api/books/${id}`);
        this.fetchBooks();
      }
    }
  }
};
</script>
