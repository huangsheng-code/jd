<template>
	<div class="nav">
		<ul>
			<li v-for="(item,index) in arr" :key="index">
				<a href="#">
					<img :src="item.imgsrc" alt="">
					{{item.title}}
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ["arr"]
};
</script>

<style lang="less">
.nav {
	background-color: #fff;
	ul {
		padding: 0.05rem 0.1rem;
		display: flex;
		flex-wrap: wrap;
		li {
			margin: 0.04rem 0;
			text-align: center;
			width: 25%;
			img {
				width: 0.48rem;
				display: block;
				margin: 0 auto;
				margin-bottom: 0.05rem;
			}
			a {
				color: #333333;
				font-size: 0.14rem;
			}
		}
	}
}
</style>