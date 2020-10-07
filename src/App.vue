<template>
	<div id="app">
		<!-- <img src="./assets/logo.png"> -->
		<router-view />
		<nut-tabbar :tabbar-list="tabList3" :bottom="true">
		</nut-tabbar>
	</div>
</template>

<script>
import { obj } from "../static/utils.js";
export default {
	name: "App",
	data() {
		return {
			tabList3: [
				{
					tabTitle: "",
					curr: true,
					icon: require("../src/assets/images/icon/icon-home.png"),
					activeIcon: require("../src/assets/images/icon/icon-home-active.png"),
					href: "#/index"
				},
				{
					tabTitle: "",
					curr: false,
					icon: require("../src/assets/images/icon/icon-catergry.png"),
					activeIcon: require("../src/assets/images/icon/icon-catergry-active.png"),
					href: "#/sort"
				},
				{
					tabTitle: "",
					curr: false,
					icon: require("../src/assets/images/icon/icon-find.png"),
					activeIcon: require("../src/assets/images/icon/icon-find-active.png"),
					href: "#/find"
				},
				{
					tabTitle: "",
					curr: false,
					num: 0,
					icon: require("../src/assets/images/icon/icon-cart.png"),
					activeIcon: require("../src/assets/images/icon/icon-cart.png"),
					href: "#/shoppingcart"
				},
				{
					tabTitle: "",
					curr: false,
					icon: require("../src/assets/images/icon/icon-me.png"),
					activeIcon: require("../src/assets/images/icon/icon-me-active.png"),
					href: "#/mine"
				}
			]
		};
	}
};
</script>

<style lang="less">
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-bottom: 0.7rem;
}
* {
	margin: 0;
	padding: 0;
	list-style: none;
}
a {
	text-decoration: none;
}
body {
	font-size: 16px;
	max-width: 640px;
	margin: 0 auto;
	position: relative;
}
html {
	font-size: 100px;
}
.nut-tabbar {
	max-width: 640px;
	margin-left: 50%;
	transform: translateX(-50%);
	div.icon {
		width: 0.75rem;
		height: 0.6rem;
	}
}
</style>
