<template>
  <div id="pagination">
    <div class="button" :class="{ active: page > 1 }" @click="navigateToPage(page - 1)">
      Previous page
    </div>
    <div class="pages">
      <span class="page" v-for="i in Array(startCount).keys()"
            :key="i + 1"
            :class="{ active: i + 1 === page }"
            @click="navigateToPage(i + 1)">{{ i + 1 }}</span>
      <span v-if="middleStart - startCount > 0">&hellip;</span>
      <span class="page"
            v-for="i in Array(middleCount).keys()"
            :key="middleStart + i + 1"
            :class="{ active: middleStart + i + 1 === page }"
            @click="navigateToPage(middleStart + i + 1)">{{ middleStart + i + 1 }}</span>
      <span v-if="this.pages - endCount > middleStart + middleCount">&hellip;</span>
      <span class="page"
            v-for="i in Array(endCount).keys()"
            :key="i + pages - endCount + 1"
            :class="{ active: i + pages - endCount + 1 === page }"
            @click="navigateToPage(i + pages - endCount + 1)">{{ i + pages - endCount + 1 }}</span>
    </div>
    <div class="button" :class="{ active: page < pages - 1 }" @click="navigateToPage(page + 1)">
      Next page
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: [ 'page', 'pages' ],
  data() {
    return {
      middleStart: 0,
      middleCount: 0,
      startCount: 0,
      endCount: 0,
    }
  },
  mounted() {
    this.calculateShownPages()
  },
  methods: {
    calculateShownPages() {
      this.middleStart = Math.max(0, this.page - 2)
      this.middleCount = Math.min(5, this.pages - this.page)
      this.startCount = Math.min(this.middleStart, 2)
      this.endCount = Math.max(0, Math.min(this.pages - (this.middleStart + this.middleCount), 2))
    },
    navigateToPage(page) {
      this.$router.push({ params: { page } })
      this.$nextTick(() => {
        this.$parent.queryApi()
      })
    },
  },
  watch: {
    page() {
      this.calculateShownPages()
    },
    pages() {
      this.calculateShownPages()
    }
  }
}
</script>

<style scoped>
#pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
}
.pages > .page {
  cursor: pointer;
  border-radius: 4px;
}
.pages > .page.active {
  background-color: rgb(0, 129, 255);
  border-radius: 4px;
  color: #fff;
}
.pages > .page.active {
  background-color: rgb(0, 129, 255);
  color: #fff;
}
.pages > .page:not(.active):hover {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
}
.pages > span {
  padding: 0.1rem 0.4rem;
}
.button {
  color: rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
.button.active {
  color: rgb(0, 129, 255);
  cursor: pointer;
  pointer-events: initial;
}
.button.active:hover {
  text-decoration: underline;
}
</style>
