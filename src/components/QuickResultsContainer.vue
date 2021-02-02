<template>
  <div id="quick-results-container" :class="{ show, loading }">
    <div class="results">
      <slot></slot>
      <div id="more-results" @click="$parent.showMoreResults()">
        See more results &crarr;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuickResultsContainer",
  props: [ 'show', 'loading' ],
}
</script>

<style scoped>
#quick-results-container {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  height: 0;
  opacity: 0;
  transition: height 0.1s;
}
#quick-results-container.show {
  opacity: 1;
  width: 40rem;
  /* (32px + 1px + 1px + 1px) * 5 + all padding */
  height: calc(175px + 8rem);
}
#quick-results-container.loading {
  background-color: rgba(0, 0, 0, 0.05);
}
#quick-results-container.loading > .results {
  opacity: 0;
}
#more-results {
  padding: 1rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
}
#more-results:hover {
  background-color: rgba(0, 0, 255, 0.02);
  cursor: pointer;
}
</style>
