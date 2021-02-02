<template>
  <div id="quick-search-bar">
    <input type="text" placeholder="Search for a GitHub user..." ref="input" v-model="query" />
  </div>
</template>

<script>
export default {
  name: "QuickSearchBar",
  props: [ 'value' ],
  mounted() {
    this.$refs.input.focus()
  },
  computed: {
    query: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
}
</script>

<style scoped>
#quick-search-bar {
  width: 40rem;
  margin-bottom: 1rem;
}
#quick-search-bar > input {
  width: 100%;
  font-size: 2rem;
  border: none;
  outline: none;
}
#quick-search-bar > input::placeholder {
  color: rgba(0, 0, 0, 0.2);
}
</style>
