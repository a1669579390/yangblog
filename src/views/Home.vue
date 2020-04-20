<template>
  <div class="home">
    <v-nav></v-nav>
    <v-introduce class="introduce"></v-introduce>
    <v-every class="every"></v-every>
    <v-swiper class="swiper"></v-swiper>
	<v-article class="article"></v-article>
  </div>
</template>

<script>
// @ is an alias to /src
import nav from '../components/nav/nav'
import introduce from '../components/Recommend/introduce'
import swiper from '../components/swiper/swiper'
import everySay from '../components/Recommend/everysay'
import article from '../components/ArticleRecommend/Article.vue'

export default {
  components: {
    'v-nav':nav,
    'v-introduce':introduce,
    'v-swiper':swiper,
    'v-every':everySay,
	'v-article':article
  }
}
</script>
<style scoped>
  .home{
    height: 3000px;
    width: 100%;
    position: relative;
    top: 0;
  }
  .introduce{
    position: absolute;
    top: 470px;
    left: 1070px;
  }
  .every{
    position: absolute;
    top: 100px;
    left: 940px;
  }
  .swiper{
    position: absolute;
    top: 80px;
    left: 160px;
  }
  .article{
	  position: absolute;
	  top: 400px;
	  left: 160px;
  }
</style>