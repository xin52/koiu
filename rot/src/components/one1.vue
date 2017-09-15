<template>
    <div class="boxv">
      <template v-for="i in list">
        <router-link tag="div" :to="{name:'three',params:{con:i.name}}" class="lit">
            <span class='span'><i class="icon iconfont">&#xe659;</i></span>
            <span>{{i.name}}</span>
        </router-link>
    </template>
    </div>
</template>
<script>

       

        export default{

           data(){
              return {
                 list:"arr"
              }
           },
           beforeCreate(){
      
            var _this=this
     
            this.axios.get("/some/path").then(function(data){
               _this.list=data.data
               console.log(data.data)
            })

           }
        }
</script>
