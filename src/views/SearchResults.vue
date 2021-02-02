<template>
  <div>
    {{ results }}
  </div>
</template>

<script>
export default {
  name: "SearchResults",
  data() {
    return {
      results: [],
      loadingResults: true,
    }
  },
  mounted() {
    this.$github.searchByName(this.$route.params.query, 50).then((res) => {
      this.results = res.data.items
      this.loadingResults = false
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>
