<template>
  <div id="quick-result">
    <img :src="result.avatar_url"/>
    <div class="info">
      <div class="name">{{ user.name }}</div>
      <div class="login">@{{ result.login }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuickResult",
  props: [ 'result' ],
  data() {
    return {
      user: false,
    }
  },
  mounted() {
    this.$http.get(this.result.url)
    .then((res) => {
      this.user = res.data
    })
  }
}
</script>

<style scoped>
#quick-result {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
}
#quick-result:hover {
  background-color: rgba(0, 0, 255, 0.02);
}
#quick-result > img {
  height: 32px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.info {
  margin-left: 0.5rem;
  font-size: 1.25rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.name {
  font-weight: bold;
}
.login {
  font-size: 1rem;
}
</style>
