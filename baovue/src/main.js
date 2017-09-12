import Vue from "vue"

import Index from "./item/Index.vue"
new Vue({
	el:"#app",
	render(h){
	   return h(Index)
	}
})