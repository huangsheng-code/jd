<template>
	<div class="back-top" @click="fn()">
		<img src="../assets/images/icon/top.png" alt="">
	</div>
</template>

<script>
export default {
	mounted() {
		$(document).ready(function() {
			//在文档加载完毕后执行
			$(window).scroll(function() {
				//开始监听滚动条
				//获取当前滚动条高度
				var topp = $(document).scrollTop();
				if (topp > 240) {
					$(".back-top").show();
				} else {
					$(".back-top").hide();
				}
			});
		});
	},
	methods: {
		fn() {
			$("body,html").animate({ scrollTop: 0 }, 500);
		}
	}
};
</script>

<style lang="less">
.back-top {
	position: fixed;
	right: 0.2rem;
	bottom: 0.72rem;
	display: none;
	img {
		width: 0.42rem;
	}
}
</style>