<template>
  <!-- 导航栏组件 -->
	<div id="app">
		<el-menu 
			:default-active="activeIndex"
			class="el-menu-demo" 
			mode="horizontal" 
			active-text-color="#409EFF"
			@select="handleSelect">		
			<el-menu-item index="1" style="border-bottom:none;margin-left:9%">
				<span class="logo">杨の博客</span>
			</el-menu-item>
			<el-menu-item index="2" style="margin-left:3%;">
				<span><i class="el-icon-s-home"></i>首页</span>
			</el-menu-item>
				<el-submenu index="3">
				<template slot="title"><i class="el-icon-s-platform"></i>web前端</template>
				<el-menu-item index="3-1" style="">
					<img src="../../assets/img/nav/html.png" alt="">
						<span class="ml-1">HTML5</span>
				</el-menu-item>
				<el-menu-item index="3-2">
					<img src="../../assets/img/nav/css.png" alt="">
						<span class="ml-1">CSS3</span>
				</el-menu-item>
				<el-menu-item index="3-3">
					<img src="../../assets/img/nav/js.png" alt="">
						<span class="ml-1">JS</span>
				</el-menu-item>
				<el-menu-item index="3-4">
					<img src="../../assets/img/nav/vue_logo.png" alt="">
						<span class="ml-1">VUE</span>
				</el-menu-item>
				<el-menu-item index="3-5">
					<img src="../../assets/img/nav/xiaochengxu.png" alt="">
						<span class="ml-1">小程序</span>
				</el-menu-item>
			</el-submenu>
			<el-submenu index="4">
				<template slot="title"><i class="el-icon-wallet"></i>服务端</template>
				<el-menu-item index="4-1">
					<img src="../../assets/img/nav/js.png" alt="">
						<span class="ml-1">NodeJs</span>
				</el-menu-item>
				<el-menu-item index="4-2">
					<img src="../../assets/img/nav/php.png" alt="">
						<span class="ml-1">PHP</span>
				</el-menu-item>			
			</el-submenu>
			<el-submenu index="5">
				<template slot="title">
					<i class="el-icon-coin"></i>数据库
				</template>
				<el-menu-item index="5-1">
					<img src="../../assets/img/nav/mysql.png" alt="">
						<span class="ml-1">MySQL</span>
				</el-menu-item>								
			</el-submenu>
			<el-menu-item index="6">小工具</el-menu-item>
			<el-menu-item index="7">常见BUG</el-menu-item>				
			<el-menu-item index="8" class="input_inner">
				<el-input v-model="input" placeholder="请输入内容" style="height:30px;line-hight:30px">
					<i slot="prefix" class="el-input__icon el-icon-search"></i>
					<el-button slot="append">搜索</el-button>
				</el-input>
			</el-menu-item>				
		</el-menu>
</div>
</template>
<script>
	  export default {
		data() {
			return {
				activeIndex: '2',
				input:''
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
  }
</script>
<style scoped>
  #app{
	  min-width: 1600px;
	  position: fixed;
	  top: 0;
	  z-index: 999;
  }
  .logo{
	  font-size: 20px;
	  color: #000;
  }
  .ml-1{
	  margin-left: 8px;
  }
  .input_inner{
	  border-bottom:none !important;
	  margin-left:3% !important;
  }
  .input_inner>>>.el-input__inner{
	  height: 30px;
	  line-height: 30px;
  }
  .input_inner>>>.el-input__icon{
	  line-height: 30px;
  }
</style>