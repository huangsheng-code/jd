<template>
	<div class="like-live">
		<div class="top-banner">
			<img src="../assets/images/img/aishenghuo.png" alt="">
		</div>
		<div class="wrap">
			<div class="left">
				<a href="#">
					<img src="../assets/images/img/cp1.jpg" alt="">
				</a>
			</div>
			<div class="right">
				<a href="#">
					<img src="../assets/images/img/cp2.jpg" alt="">
				</a>
				<a href="#">
					<img src="../assets/images/img/cp3.jpg" alt="">
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="less">
.like-live {
	padding: 0.04rem;
	.top-banner {
		padding: 0.05rem 0;
		img {
			width: 100%;
			display: block;
		}
	}
	.wrap {
		background-color: #fff;
		border: 1px solid #e5e5e5;
		display: flex;
		height: 1.9rem;
	}
	a {
		display: block;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
	.left {
		width: 50%;
		border-right: 1px solid #c0c0c0;
		img {
			width: 100%;
			height: 100%;
		}
	}
	.right {
		width: 50%;
		a {
			height: 50%;
		}
		img {
			width: 100%;
			height: 100%;
		}
		a:nth-of-type(1) {
			border-bottom: 1px solid #c0c0c0;
		}
	}
}
</style>