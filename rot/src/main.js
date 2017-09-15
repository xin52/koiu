import Vue from "vue"
import Router from "vue-router"
import vueAxios from "vue-axios";
import axios from "axios";
//一级路由
import bao from "./components/bao.vue"
import find from "./components/find.vue"
import shou from "./components/shou.vue"
import mine from "./components/mine.vue"

// //二级路由
import one1 from "./components/one1.vue"
import one2 from "./components/one2.vue"
import one3 from "./components/one3.vue"
import one4 from "./components/one4.vue"
import one5 from "./components/one5.vue"
import three from "./components/three.vue"

//组件的懒加载
// var bao = resolve => require.ensure(['./components/bao.vue'], 
// 	() => resolve(require('./components/bao.vue')))
// var find = resolve => require.ensure(['./components/find.vue'], 
// 	() => resolve(require('./components/find.vue')))
// var shou = resolve => require.ensure(['./components/shou.vue'], 
// 	() => resolve(require('./components/shou.vue')))
// var mine = resolve => require.ensure(['./components/mine.vue'], 
// 	() => resolve(require('./components/mine.vue')))

// var one1  = resolve => require.ensure(['./components/one1.vue'], 
// 	() => resolve(require('./components/one1.vue')))
// var one2 = resolve => require.ensure(['./components/one2.vue'], 
// 	() => resolve(require('./components/one2.vue')))
// var one3 = resolve => require.ensure(['./components/one3.vue'], 
// 	() => resolve(require('./components/one3.vue')))
// var one4 = resolve => require.ensure(['./components/one4.vue'], 
// 	() => resolve(require('./components/one4.vue')))
// var one5 = resolve => require.ensure(['./components/one5.vue'], 
// 	() => resolve(require('./components/one5.vue')))

// var three = resolve => require.ensure(['./components/three.vue'], 
// 	() => resolve(require('./components/three.vue')))









var router=new Router({
	linkActiveClass:'bg',

	 routes:[
	{
      name:"shou",
      path:"/shou",
      component:shou,
      
        children:[
           {
           	name:"one1",
           	path:"one1",
           	component:one1
           },
           {
           	name:"one2",
           	path:"/one2",
           	component:one2,
           	

           },
           {
           	name:"one3",
           	path:"one3",
           	component:one3
           },
           {
           	name:"one4",
           	path:"one4",
           	component:one4
           },
           {
           	name:"one5",
           	path:"one5",
           	component:one5
           }

        ]

    },
    {
      name:"mine",
      path:"/mine",
      component:mine
    },
     {
      name:"bao",
      path:"/bao",
      component:bao
    },
     {
      name:"find",
      path:"/find",
      component:find
    },
     {
      name:"three",
      path:"/three",
      component:three
    }
    
 ]
})
Vue.prototype.axios=axios;
Vue.use(Router,vueAxios,axios);
var vm=new Vue({
	el:"#app",
	router
})