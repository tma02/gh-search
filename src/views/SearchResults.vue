<template>
  <div id="search-results">
    <search-bar :query="$route.params.query"></search-bar>
    <h4>{{ total.toLocaleString() }} results</h4>
    <results-container>
      <quick-result v-for="result in results"
                    :key="result.id"
                    :result="result"
                    @click.native="openProfile(result.login)"
      ></quick-result>
    </results-container>
    <pagination></pagination>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import QuickResult from "@/components/QuickResult";
import ResultsContainer from "@/components/ResultsContainer";
import Pagination from "@/components/Pagination";
export default {
  name: "SearchResults",
  components: {Pagination, ResultsContainer, QuickResult, SearchBar},
  data() {
    return {
      results: [],
      loadingResults: true,
      total: 0,
      page: this.$route.params.page || 0,
      pages: 1,
    }
  },
  methods: {
    openProfile(login) {
      window.open(`https://github.com/${login}`)
    },
    queryApi() {
      const perPage = 15;
      this.$github.searchByName(this.$route.params.query, perPage, this.page).then((res) => {
        this.results = res.data.items
        this.total = res.data.total_count
        this.pages = Math.ceil(this.total / perPage)
        this.loadingResults = false
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.queryApi()
  }
}
</script>

<style scoped>
#search-results {
  max-width: 800px;
  margin: auto;
  padding: 2rem 1rem;
}
</style>
