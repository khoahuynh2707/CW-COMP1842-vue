<template>
  <div>
    <h2>{{ $t('editBook') }}</h2>
    <WordForm
      v-if="book"
      :book="book"
      :submitText="$t('submit')"
      v-on:submit="updateBook"
    />
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
    try {
      const res = await axios.get(`http://localhost:3000/api/books/${this.$route.params.id}`);
      this.book = res.data;
    } catch (err) {
      this.$root.$emit('showMessage', this.$t('loadFail'));
      console.error(err);
    }
  },
  methods: {
    async updateBook(updatedData) {
      try {
        await axios.put(`http://localhost:3000/api/books/${this.$route.params.id}`, updatedData);
        this.$root.$emit('showMessage', this.$t('updateSuccess'));
        this.$router.push('/');
      } catch (err) {
        this.$root.$emit('showMessage', this.$t('updateFail'));
        console.error(err);
      }
    }
  }
};
</script>
