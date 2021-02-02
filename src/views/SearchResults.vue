<template>
  <div>
    <search-bar></search-bar>
    {{ results }}
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
export default {
  name: "SearchResults",
  components: {SearchBar},
  data() {
    return {
      results: [],
      loadingResults: true,
      total: 0,
      page: this.$route.params.page || 0,
      pages: 1,
    }
  },
  mounted() {
    const perPage = 50;
    this.$github.searchByName(this.$route.params.query, perPage).then((res) => {
      this.results = res.data.items
      this.total = res.data.total_count
      this.pages = Math.ceil(this.total / perPage)
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
