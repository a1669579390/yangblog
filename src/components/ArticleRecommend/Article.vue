<template>
	<div id="app">
		<h2 class="title">
			文章推荐
		</h2>
		<!-- 文章推荐列表 -->
		<ul>
			<li v-for="(item,index) in items" :key="index">
				<div class="clearfix">
					<div class="news-img-box">
						<img :src="GLOBAL.BASE_URL+item.img" />
					</div>
					<div class="news-content">
						<h3 class="title-h3">
							<span>{{item.classify}}</span>
							{{item.title}}
						</h3>
						<div class="list_item">
							{{item.content}}
						</div>
						<div class="tools">
							<span class="date-time">
								<i class="el-icon-time"></i>
								发布时间：
								<em>{{item.releaseTime}}</em>
							</span>
							<span class="classify">
								<i class="el-icon-document"></i>
								分类：
								<em>{{item.classify}}</em>
							</span>
						</div>						
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				start:'',
				items:[]
			}
		},
		methods:{
			getRecommand(start){
				this.$axios.get('/users/',{
					params:{
						start
					}
				})
				.then(res=>{
					console.log(res.data)
					this.items=res.data
				})
				.catch(err=>{
					console.log(err)
				})
			}
		},
		mounted(){
			this.getRecommand()
		}
	}
</script>

<style scoped>
	#app{
		width: 880px;
	}
	#app>ul{
		list-style: none;
		margin: 0;
		padding: 0;
	}
	#app>ul>li{
		padding: 15px 0 15px;
		border-bottom: 1px solid #f0f0f0;
		background-color: #fff;
		margin-bottom: 20px;
		transition: .3s;
		border-radius: 5px;
		box-shadow: 1px 1px 1px #f0f0f0;
		cursor: pointer;
	}
	#app>ul>li:hover{
		border-radius: 4px;
		box-shadow: 1px 3px 9px #ccc;
	}
	.title{
		font-size: 1pc;
		font-weight: 400;
		color: #333;
		padding: 2px 0 2px 10px;
		border-left: 2px solid rgb(64, 158, 255);
		margin: 20px 0 20px 2px;
		height: 25px;
		line-height: 25px;
	}
	.title-h3{
		padding: 5px 0px 5px;
		color: #3d3d3d;
		font-size: 18px;
		margin: 0;
		line-height: 18px;
	}
	.title-h3 span{
		font-size: 14px;
		background: #06aaff;
		color: #fff;
		padding: 2px 6px;
		border-radius: 3px;
	}
	.clearfix{
		display: flex;
		flex-direction: row;
	}
	.news-img-box{
		margin-left: 10px;
		width: 205px;
		height: 184px;
		display: inline-block;
		overflow: hidden;
	}
	.news-img-box>img{
		width: 100%;
		height: 100%;
		transition: all .8s; 
	}
	#app>ul>li:hover .news-img-box>img{
		transform: scale(1.3);	
	}
	.news-content{
		width: 72%;
		padding:0 30px;
		display: inline-block;
	}
	.list_item{
		color: #aaa;
		padding: 20px 0 0px 0;
		text-indent: 30px;
		word-break: break-all;
		text-overflow: ellipsis;
		display: -webkit-box;/** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical;/** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 5;/** 显示的行数 **/
		overflow: hidden; /** 隐藏超出的内容 **/
	}
	.classify{
		margin-left: 75px;
	}
	.date-time,.classify{
		color: #a8a8a8;
		font-size: 14px;
	}
	.tools{
		margin-top: 13px;
	}
</style>
