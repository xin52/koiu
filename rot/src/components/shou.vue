<template>
   <div class="box">
   <div class="nav">
           <router-link tag="div"  :to="{name:'one1'}" class="list">
                 <p>热门</p>
            </router-link>
            <router-link tag="div" :to="{name:'one2'}" class="list">
                <p>分类</p>
            </router-link>
            <router-link tag="div" :to="{name:'one3'}" class="list">
                <p>精品</p>
            </router-link>
            <router-link tag="div" :to="{name:'one4'}" class="list">
                <p>广播</p>
            </router-link>
            <router-link tag="div" :to="{name:'one5'}" class="list">
                <p>直播</p>
            </router-link>

            
    </div>
<router-view></router-view>
  </div>
</template>
<script>
  
</script>