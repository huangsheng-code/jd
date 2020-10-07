<template>
	<div class="search">
		<div class="bg"></div>
		<template>
			<slot name='icon'></slot>
		</template>
		<template>
			<slot name='search'></slot>
		</template>
		<input type="text" :placeholder="searchtips">
		<template>
			<slot name='login'></slot>
		</template>
	</div>
</template>

<script>
export default {
	props: ["searchtips", "title"],
	mounted() {
		$(document).ready(function() {
			//在文档加载完毕后执行
			$(window).scroll(function() {
				//开始监听滚动条
				//获取当前滚动条高度
				var topp = $(document).scrollTop();
				if (topp > 140) {
					$(".search .bg").css("backgroundColor", "#f15353");
					$(".search .login").css("color", "#fff");
				} else {
					$(".search .bg").css("backgroundColor", "transparent");
					$(".search .login").css("color", "#fff");
				}
			});
		});
	}
};
</script>

<style lang="less">
.search {
	position: relative;
	height: 0.5rem;
	.bg {
		height: 0.5rem;
	}
	input {
		width: 80%;
		position: absolute;
		top: 50%;
		left: 0.12rem;
		transform: translateY(-50%);
		height: 0.3rem;
		border: none;
		border: 1px solid #ccc;
		border-radius: 0.28rem;
		text-indent: 0.7rem;
	}
}
</style>