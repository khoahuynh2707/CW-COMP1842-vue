<template>
  <form v-on:submit.prevent="handleSubmit">
    <div>
      <label>{{ $t('titleLabel') }}:</label>
      <input v-model="localBook.title" required />
    </div>
    <div>
      <label>{{ $t('author') }}:</label>
      <input v-model="localBook.author" required />
    </div>
    <div>
      <label>{{ $t('genre') }}:</label>
      <input v-model="localBook.genre" />
    </div>
    <div>
      <label>{{ $t('year') }}:</label>
      <input type="number" v-model.number="localBook.year" />
    </div>
    <button type="submit">{{ submitText }}</button>
  </form>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      default: () => ({
        title: '',
        author: '',
        genre: '',
        year: new Date().getFullYear()
      })
    },
    submitText: {
      type: String,
      default: 'Save'
    }
  },
  data() {
    return {
      localBook: { ...this.book }
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', { ...this.localBook });
    }
  }
};
</script>