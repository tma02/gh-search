<template>
  <div id="quick-search" @keypress.enter="showMoreResults()">
    <quick-search-bar v-model="query"></quick-search-bar>
    <quick-results-container :show="showResults" :loading="loadingResults">
      <quick-result v-for="result in results"
                    :key="result.id"
                    :result="result"
                    @click.native="openProfile(result.login)">
      </quick-result>
    </quick-results-container>
  </div>
</template>

<script>
import QuickSearchBar from "@/components/QuickSearchBar";
import QuickResultsContainer from "@/components/QuickResultsContainer";
import QuickResult from "@/components/QuickResult";
export default {
  name: "QuickSearch",
  components: {
    QuickResult,
    QuickResultsContainer,
    QuickSearchBar,
  },
  data() {
    return {
      queryInterval: false,
      query: '',
      lastQuery: '',
      results: [],
      showResults: false,
      loadingResults: false,
    }
  },
  methods: {
    openProfile(login) {
      window.open(`https://github.com/${login}`)
    },
    showMoreResults() {
      if (this.query.length > 0) {
        this.$router.push(`/results/${this.query}`)
      }
    }
  },
  watch: {
    query(val) {
      // Update UI instantly
      this.showResults = val.length > 0
      this.loadingResults = true
    }
  },
  mounted() {
    // Only actually query HTTP once every 1000ms
    setInterval(() => {
      if (this.query !== this.lastQuery) {
        this.$http.get(`https://api.github.com/search/users?q=${this.query} in:name&sort=followers&per_page=5`)
        .then((res) => {
          this.results = res.data.items
          this.loadingResults = false
        })
        .catch((err) => {
          console.log(err)
        })
        this.lastQuery = this.query
      }
    }, 1000);
  },
  destroyed() {
    if (this.queryInterval) {
      clearInterval(this.queryInterval)
    }
  }
}
</script>

<style scoped>
#quick-search {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>
