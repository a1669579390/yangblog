<template>
  <div id="app">
      <div class="title">
        <div class="title_01">
          <span>{{data.title}}</span>
          <i></i>
        </div>
        <p>{{data.desc}}</p>
        <div class="img">
          <img src="../../assets/img/smalllogo/qq.png" alt="">
          <img src="../../assets/img/smalllogo/wechat.png" alt="">
          <img src="../../assets/img/smalllogo/github.png" alt="">
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      data:[]
    }
  },
  methods:{
    getIntroduce(){
      this.$axios.get('/').then(res=>{
        console.log(res)
        this.data = res.data[0]
      }).catch(err=>{
        console.log(err)
      })
    }
  },
  mounted(){
    this.getIntroduce()
  }
}
</script>
<style scoped>
  #app{
    width: 290px;
    height: 200px;
    background-color: rgb(255, 255, 255,.8);
    transition: all .5s;
  }
  #app:hover{
    box-shadow: 5px 5px 10px 10px #ccc;
  }
  .title{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .title_01{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 5px 0 0 20px;
  }
  .title_01 span{
    font-family: "PingFang SC";
    font-size: 16px;
    font-weight: 600;
    width: 80px;
    color:#555;
  }
  .title_01 i{
    width: 160px;
    display: inline-block;
    height: 2px;
    background-color: #bbb;
    border-radius: 2px;
  }
  .title p{
    font-style: normal;
    display: block;
    font-size: 14px;
    padding: 0 40px;
    margin: 0;
  }
  .img{
    padding: 10px 30px;
  }
  .img img:nth-child(1){
    margin-left: 30px;
  }
  .img img:not(:nth-child(1)){
    margin-left: 40px;
  }
</style>