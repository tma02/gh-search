<template>
  <div id="results-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ResultsContainer"
}
</script>

<style scoped>
#results-container {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
