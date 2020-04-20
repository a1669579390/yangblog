<template>
  <div id="app">
    <span>{{desc}}</span>
  </div>
</template>
<script>
export default {
  data(){
    return{
		desc:[]
    }
  },
  methods:{
	  getFeelings(week){
		  this.$axios.get('/getFeelings',{
			  params:{
				  week
			  }
		  })
		  .then(res=>{
			  // console.log(res.data[0].feeling_desc)
			  this.desc = res.data[0].feeling_desc
		  })
		  .catch(err=>{
			  console.log(err)
		  })
	  }
  },
  created(){
	  let week = new Date().getDay()
	  console.log(week)
	  this.getFeelings(week)
  }
}
</script>
<style scoped>
  #app{
    width: 420px;
    height: 266px;
    background-image: url('../../../public/img/index/everysay.png');
    background-repeat: no-repeat;
    background-size: 100%;
    font-family: "微软仿宋";
    color: aliceblue;
  }
  #app>span{
	display: inline-block;
	width: 200px;
	height: 150px;
	overflow: hidden;
	position: absolute;
	top: 100px;
	left: 40px;
	font-size: 17px;
	color: #93b3ef;
  }
</style>