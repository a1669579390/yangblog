<template>
	<div id="app">
		<h2 class="title">
			文章推荐
		</h2>
		<!-- 文章推荐列表 -->
		<ul>
			<li>
				<div class="clearfix">
					<div class="news-img-box">
						<img src="https://cdn.duanliang920.com/uploads/allimg/140605/1-1406052123280-L.jpg" />
					</div>
					<div class="news-content">
						<h3 class="title-h3">
							<span>React</span>
							如何建立个人博客？
						</h3>
						<div class="list_item">
							几个月没有发过文章了，最近确实挺忙！！这几个月一直在搞公司的一个小程序项目，所以一直没抽出时间，后面我会把遇到的问题及踩到的坑也会提出来，今天咱们不说踩过的坑，说一个比较常见及常用的功能，就是内容的展开和收起。可能大家就开始想了，这么简单一功能还用看别人教吗？咱们先废话不多说，先来看看这个是怎样的
						</div>
						<div class="tools">
							<span class="date-time">
								<i class="el-icon-time"></i>
								发布时间：
								<em>2014-06-05 10:24:00</em>
							</span>
							<span class="classify">
								<i class="el-icon-document"></i>
								分类：
								<em>VUE</em>
							</span>
						</div>						
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
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
