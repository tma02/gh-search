<template>
  <div id="quick-search">
    <quick-search-bar v-model="query"></quick-search-bar>
  </div>
</template>

<script>
import QuickSearchBar from "@/components/QuickSearchBar";
export default {
  name: "QuickSearch",
  data() {
    return {
      query: '',
    }
  },
  components: {
    QuickSearchBar
  }
}
</script>

<style scoped>
#quick-search {
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>
