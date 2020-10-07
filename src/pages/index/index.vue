<template>
	<div class="home">
		<Search searchtips="请输入你要查找的内容">
			<template #icon>
				<i class="icon"></i>
			</template>
			<template #search>
				<i class="icon-search"></i>
			</template>
			<template #login>
				<a href="#" class="login">{{content}}</a>
			</template>
		</Search>
		<Banner swiperID="swiperID1" :swiperbuttonshow='false'>
			<template #swiper-slide>
				<div class="swiper-slide">
					<img src="@/assets/images/img/1.jpg" alt="">
				</div>
				<div class="swiper-slide">
					<img src="@/assets/images/img/2.jpg" alt="">
				</div>
				<div class="swiper-slide">
					<img src="@/assets/images/img/3.jpg" alt="">
				</div>
				<div class="swiper-slide">
					<img src="@/assets/images/img/4.jpg" alt="">
				</div>
				<div class="swiper-slide">
					<img src="@/assets/images/img/5.jpg" alt="">
				</div>
				<div class="swiper-slide">
					<img src="@/assets/images/img/6.jpg" alt="">
				</div>
				<div class="swiper-slide">
					<img src="@/assets/images/img/7.jpg" alt="">
				</div>
				<div class="swiper-slide">
					<img src="@/assets/images/img/8.jpg" alt="">
				</div>
			</template>
		</Banner>
		<Nav :arr="navarr"></Nav>
		<div class="banner-img">
			<img src="../../assets/images/img/banner-img.png" alt="">
		</div>
		<InstantKill></InstantKill>
		<LikeLive></LikeLive>
		<Recommend :arr="rarr"></Recommend>
		<BackTop></BackTop>
		<Footer></Footer>
	</div>
</template>

<script>
import Footer from "@/components/footer";
import Search from "@/components/search";
import Banner from "@/components/banner";
import Nav from "@/components/nav";
import InstantKill from "@/components/instantkill";
import LikeLive from "@/components/live";
import Recommend from "@/components/recommend";
import BackTop from "@/components/backtop";
export default {
	components: {
		Footer,
		Search,
		Banner,
		Nav,
		InstantKill,
		LikeLive,
		Recommend,
		BackTop
	},
	data() {
		return {
			content: "登录",
			navarr: [
				{
					imgsrc: require("../../assets/images/img/nav0.png"),
					title: "分类查询"
				},
				{
					imgsrc: require("../../assets/images/img/nav1.png"),
					title: "物流查询"
				},
				{
					imgsrc: require("../../assets/images/img/nav2.png"),
					title: "购物车"
				},
				{
					imgsrc: require("../../assets/images/img/nav3.png"),
					title: "我的京东"
				},
				{
					imgsrc: require("../../assets/images/img/nav4.png"),
					title: "京东生鲜"
				},
				{
					imgsrc: require("../../assets/images/img/nav5.png"),
					title: "领劵中心"
				},
				{
					imgsrc: require("../../assets/images/img/nav6.png"),
					title: "京东超市"
				},
				{
					imgsrc: require("../../assets/images/img/nav7.png"),
					title: "我的关注"
				}
			],
			rarr: [
				{
					imgsrc: require("../../assets/images/img/item01.jpg"),
					title: "晋腾家居不锈钢手动压面机手摇多功能面条机水果榨汁机",
					rate: 94,
					price: 99
				},
				{
					imgsrc: require("../../assets/images/img/item02.jpg"),
					title: "平柜 连衣裙长袖2018春装新款韩版时尚女装修身显瘦",
					rate: 99,
					price: 198
				},
				{
					imgsrc: require("../../assets/images/img/item03.jpg"),
					title: "LG 29WK600-W 29英寸21:9 超宽屏 FHD FreeSynic",
					rate: 99,
					price: 1988.0
				},
				{
					imgsrc: require("../../assets/images/img/item04.jpg"),
					title: "劲仔小鱼 鱼干鱼仔 零食 香辣味 15g*20包/盒",
					rate: 99,
					price: 23.8
				}
			]
		};
	}
};
</script>

<style lang="less">
.home {
	background-color: #f0f2f5;
	.search {
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 2;
		max-width: 640px;
		.icon {
			width: 0.26rem;
			height: 0.26rem;
			display: block;
			position: absolute;
			top: 50%;
			left: 0.26rem;
			z-index: 1;
			transform: translateY(-50%);
			background: url("../../assets/images/icon/sprites.png") 0.02rem
				0.05rem no-repeat;
			background-size: 2.2rem 2.2rem;
		}
		.icon-search {
			width: 0.26rem;
			height: 0.26rem;
			display: block;
			position: absolute;
			top: 50%;
			left: 0.54rem;
			z-index: 1;
			transform: translateY(-50%);
			background: url("../../assets/images/icon/sprites.png") -0.63rem -1.2rem
				no-repeat;
			background-size: 2.2rem 2.2rem;
		}
		.login {
			position: absolute;
			right: 0.16rem;
			top: 50%;
			transform: translateY(-50%);
			font-size: 0.14rem;
			color: #fff;
		}
	}
	.banner-img {
		padding: 0.04rem 0.02rem 0 0;
		img {
			width: 100%;
		}
	}
}
</style>