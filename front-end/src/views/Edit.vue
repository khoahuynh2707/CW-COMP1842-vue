<template>
  <div>
    <h2>{{ $t('editBook') }}</h2>
    <WordForm v-if="book" :book="book" :submitText="$t('submit')" v-on:submit="updateBook" />
  </div>
</template>

<script>
import WordForm from '../components/WordForm.vue';
import axios from 'axios';

export default {
  components: { WordForm },
  data() {
    return {
      book: null
    };
  },
  async created() {
    const res = await axios.get(`http://localhost:3000/api/books/${this.$route.params.id}`);
    this.book = res.data;
  },
  methods: {
    async updateBook(updatedData) {
      await axios.put(`http://localhost:3000/api/books/${this.$route.params.id}`, updatedData);
      this.$router.push('/');
    }
  }
};
</script>
