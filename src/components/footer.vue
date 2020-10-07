<template>
	<div class="footer">
		<ul class="sub">
			<li>
				<a href="#">登录</a>
			</li>
			<li>
				<a href="#">注册</a>
			</li>
			<li>
				<a href="#">反馈</a>
			</li>
			<li>
				<a href="#">返回顶部</a>
			</li>
		</ul>
		<ul class="services">
			<li><a href="#"><i></i>客户端</a></li>
			<li><a href="#"><i></i>触屏版</a></li>
			<li><a href="#"><i></i>电脑端</a></li>
		</ul>
		<p class="copy">Copyright &copy; 2004-2018 京东JD.com 版权所有</p>
	</div>
</template>

<script>
export default {};
</script>

<style lang="less">
.footer {
	background-color: #fff;
	ul.sub {
		text-align: center;
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #bfbfbf;
		padding: 0.18rem 0.1rem;
		a {
			display: block;
			color: #848689;
			font-size: 0.15rem;
		}
		li {
			flex: 1;
			border-right: 1px solid #dadada;
		}
		li:nth-last-of-type(1) {
			border: none;
		}
	}
	ul.services {
		display: flex;
		justify-content: space-around;
		padding: 0.12rem 0;
		border-bottom: 1px solid #bfbfbf;
		li {
			i {
				display: block;
				width: 0.42rem;
				height: 0.42rem;
				margin-bottom: 0.05rem;
			}
			a {
				color: #848689;
				font-size: 0.15rem;
			}
		}
		li:nth-of-type(1) i {
			background: url("../assets/images/icon/sprites.png") -1.56rem -0.91rem
				no-repeat;
			background-size: 2.6rem 2.6rem;
		}
		li:nth-of-type(2) i {
			background: url("../assets/images/icon/sprites.png") -0.52rem -0.91rem
				no-repeat;
			background-size: 2.6rem 2.6rem;
		}
		li:nth-of-type(3) i {
			background: url("../assets/images/icon/sprites.png") -1.04rem -0.91rem
				no-repeat;
			background-size: 2.6rem 2.6rem;
		}
	}
	p.copy {
		font-size: 0.13rem;
		text-align: center;
		line-height: 0.26rem;
		background-color: #f8f8f8;
	}
}
</style>