var gulp=require("gulp"),
server=require("gulp-webserver"),
urlTool=require("url"),
data=[
         {
              src:"img/2.jpg",
              hs:"QQ看点",
              time:"下午2:08",
              b:"[精选]",
              content:"来了好多人看北极的风景"
           },
           {
              src:"img/3.jpg",
              hs:"群助手",
              time:"下午2:85",
              b:"[1个群有新消息]"
              
           },
           {
              src:"img/3.jpg",
              hs:"张丽",
              time:"下午3:02",
              
              content:"吃了吗"
           },
           {
              src:"img/4.jpg",
              hs:"李经理",
              time:"下午3:15",
              
              content:"工作完成了吗？"
           },
            {
              src:"img/2.jpg",
              hs:"煎熬就",
              time:"下午4:12",
              
              content:"干嘛呢"
           },
           {
              src:"img/4.jpg",
              hs:"积极",
              time:"下午4:14",
              
              content:"看开点"
           },
           {
              src:"img/3.jpg",
              hs:"几句话",
              time:"下午4:34",
              
              content:"克咳片"
           }


]
gulp.task("server",function(){
	gulp.src(".")
	     .pipe(server({
	     	port:8888,
	     	middleware:function(req,res){
	     		res.setHeader("Access-Control-Allow-Origin","*")
	     		var method=req.method,
	     		pathname=urlTool.parse(req.url).pathname;
                    console.log(method)
	     		if(method==="GET"){
	     			switch(pathname){
	     				case "/index":
	     				res.setHeader("content-type","application/json;charset=utf-8")
	     				res.write(JSON.stringify(data))
               res.end()
	     			 }
	     		}else if(method==="POST"){
	     			var postData=""
	     			res.on("data",function(chunk){
	     				postData+=chunk;
	     			})
	     			re.on("end",function(chunk){
	     				console.log(postData)
	     			})

	     		}
	     	}
	     }))
})

gulp.task("default",["server"])
