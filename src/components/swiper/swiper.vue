<template>
  <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
              <img :src="banner[0].imgurl" alt="">
          </div>
        <div class="swiper-slide">
            <div class="swiper-slide">
              <img :src="banner[1].imgurl" alt="">
          </div>
        </div>
        <div class="swiper-slide">
            <div class="swiper-slide">
              <img :src="banner[2].imgurl" alt="">
          </div>
        </div>
        <div class="swiper-slide">
              <img :src="banner[3].imgurl" alt="">
          </div>
      </div>
  </div>
</template>
<script>
import Swiper from "swiper"
export default {
  data(){
    return{
      banner:[
        {imgurl:''},
        {imgurl:''},
        {imgurl:''},
        {imgurl:''},
        ]
    }
  },
  methods:{
    initSwiper () {
        new Swiper('.swiper-container', {
          speed:1000,
          grabCursor:true,
          autoplay: true,
          parallax : true,
          fadeEffect:'crossFade',
          effect:'coverflow',
          direction:'vertical',
        })
      },
      getBanner(){
        this.$axios.get('/bannerImg')
        .then(res=>{
          console.log(res.data)
          this.banner = res.data
          console.log(this.banner)
        })
        .catch(err=>{
          console.log(err)
        })
      }
  },
  created(){

  },
  mounted(){
    this.initSwiper()
    this.getBanner()
  }
}
</script>
<style scoped>
  @import "../../../node_modules/swiper/css/swiper.css";
  .swiper-container {
      width: 700px;
      height: 300px;
    }
    .swiper-slide img{
      width: 100%;
      height: 100%;
    }
</style>