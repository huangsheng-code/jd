<template>
	<div class="instantkill">
		<div class="active-top">
			<p>
				<img src="../assets/images/img/seckill-icon.png" alt="">
				<span class="title">掌上秒杀</span>
				<span class="time">03:58:39</span>
				<span class="sub">精选轮番秒</span>
			</p>
		</div>
		<ul>
			<li v-for="(item,index) in arr" :key="index">
				<a href="#">
					<img :src="item.imgsrc" alt="">
					<p class="price">￥<span>{{item.price}}</span></p>
					<p class="oldprice">￥<span>{{item.oldprice}}</span></p>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			arr: [
				{
					price: 80,
					oldprice: 150,
					imgsrc: require("../assets/images/img/pro01.jpg")
				},
				{
					price: 120,
					oldprice: 190,
					imgsrc: require("../assets/images/img/pro02.jpg")
				},
				{
					price: 2399,
					oldprice: 5399,
					imgsrc: require("../assets/images/img/pro03.jpg")
				},
				{
					price: 9.8,
					oldprice: 198,
					imgsrc: require("../assets/images/img/pro04.jpg")
				}
			]
		};
	}
};
</script>

<style lang="less">
.instantkill {
	margin: 0 0.04rem;
	border: 1px solid #e5e5e5;
	background-color: #fff;
	padding-bottom: 0.1rem;
	padding-top: 0.05rem;
	.active-top {
		margin-bottom: 0.08rem;
		p {
			font-size: 0.15rem;
			padding-right: 0.08rem;
			.title {
				color: #f23030;
				font-size: 0.15rem;
				margin-right: 0.06rem;
			}
			.time {
				color: #000;
			}
			.sub {
				color: #f23030;
				font-size: 0.14rem;
				float: right;
			}
			img {
				width: 0.18rem;
				vertical-align: -0.06rem;
				margin: 0 0.03rem;
			}
		}
	}
	ul {
		text-align: center;
		display: flex;
		li {
			flex: 1;
			p.price {
				color: #f23030;
			}
			p.oldprice {
				color: #666666;
				text-decoration: line-through;
				margin-top: 0.04rem;
			}
			img {
				width: 100%;
			}
		}
	}
}
</style>