<template>
  <div id="search-results">
    <search-bar :query="$route.params.query"></search-bar>
    <h2>{{ total.toLocaleString() }} results</h2>
    <results-container>
      <quick-result v-for="result in results"
                    :key="result.id"
                    :result="result"
                    @click.native="openProfile(result.login)"
      ></quick-result>
    </results-container>
    <pagination :page="page" :pages="pages"></pagination>
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
      page: Number(this.$route.params.page) || 1,
      pages: 1,
    }
  },
  methods: {
    openProfile(login) {
      window.open(`https://github.com/${login}`)
    },
    queryApi() {
      this.page = Number(this.$route.params.page) || 1
      const perPage = 10;
      this.$github.searchByName(this.$route.params.query, perPage, this.page).then((res) => {
        this.results = res.data.items
        this.total = res.data.total_count
        this.pages = Math.min(Math.ceil(this.total / perPage), 100)
        this.loadingResults = false
        this.$forceUpdate()
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
