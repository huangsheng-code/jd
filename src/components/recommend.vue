<template>
	<div class="recommend">
		<p class="title">为你推荐</p>
		<ul>
			<li v-for="(item,index) in arr" :key="index">
				<a href="" class="">
					<img :src="item.imgsrc" alt="">
					<p class="ititle">{{item.title}}</p>
					<p class="price">￥<span class="val">{{item.price}}</span></p>
				</a>
				<div class="footer-sub">
					<p>好评率<span class="well">{{item.rate}}</span>%</p>
					<a href="#">看相似</a>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: ["arr"]
};
</script>

<style lang="less">
.recommend {
	p {
		padding: 0 0.05rem;
	}
	p.title {
		text-align: center;
		margin: 0.15rem 0;
		font-size: 0.15rem;
		color: #848689;
	}
	ul {
		text-align: left;
		display: flex;
		flex-wrap: wrap;
		li:nth-of-type(odd) {
			margin-right: 1.4%;
		}
		li {
			margin-bottom: 0.07rem;
			border: 1px solid #cccccc;
			box-sizing: border-box;
			a {
				display: block;
			}
			width: 49.3%;
			img {
				width: 100%;
			}
			p.ititle {
				font-size: 0.14rem;
				color: #333333;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
			p.price {
				color: #f2305c;
				margin: 0.1rem 0;
			}
			.footer-sub {
				height: 0.32rem;
				p {
					font-size: 0.14rem;
					color: #999999;
					float: left;
				}
				a {
					border-radius: 0.03rem;
					border: 1px solid #cecfd0;
					font-size: 0.14rem;
					color: #686868;
					float: right;
					width: 0.5rem;
					text-align: center;
					line-height: 0.2rem;
					margin-right: 0.15rem;
				}
			}
		}
	}
}
</style>