// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';

// NutUI.install(Vue);
import TabBar from '@nutui/nutui/dist/packages/tabbar/tabbar.js';  // 加载构建后的JS
import '@nutui/nutui/dist/packages/tabbar/tabbar.css';  //加载构建后的CSS
//主题定制等场景需要加载SCSS,而不是构建后的CSS
//import '@nutui/nutui/dist/packages/button/button.scss'; 

TabBar.install(Vue);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
