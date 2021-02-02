<template>
  <div>
    <input type="text" v-model="query" placeholder="Search for a GitHub user..." @keypress.enter="newQuery()" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: [ 'query' ],
  methods: {
    newQuery() {
      this.$router.push(`/results/${this.query}`)
      this.$parent.queryApi()
    },
  }
}
</script>

<style scoped>
input {
  width: calc(100% - 1.6rem - 2px);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  font-size: 1.2rem;
  padding: 0.4rem 0.8rem;
  outline: none;
}
</style>
