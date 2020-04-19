<template>
  <div class="home">
    <v-nav></v-nav>
    <v-introduce class="introduce"></v-introduce>
  </div>
</template>

<script>
// @ is an alias to /src
import nav from '../components/nav/nav'
import introduce from '../components/Recommend/introduce'
export default {
  components: {
    'v-nav':nav,
    'v-introduce':introduce
  }
}
</script>
<style scoped>
  .home{
    height: 3000px;
    width: 100%;
  }
  .introduce{
    position: relative;
    top: 70px;
    left: 1070px;
  }
</style>