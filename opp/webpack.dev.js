var webpack=require("webpack")
var HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
	entry:__dirname+"/src/main.js",
	output:{
		path:__dirname+"/dist",
		filename:'[name].js'
	},
	module:{
		rules:[
          {
          	test:/\.js$/,
          	loader:"babel-loader"
          },
          {
          	test:/\.css$/,
          	use:["style-loader","css-loader"]
          },
          {
          	test:/\.html$/,
          	loader:"html-loader"
          },
          {
          	test:/\.png|.jpg$/,
          	loader:"url-loader"
          }
		]
	},
	devServer:{
		port:8030,
		host:"127.0.0.1",
		hot:true,
		setup(app){
			app.get("/index",function(req,res){
			res.setHeader("Access-Control-Allow-Origin","*")
			res.setHeader("content-type","application/json;charset=utf-8")
			var data=[
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
				res.json(data)
                 
              
			})
		}

	},
 	plugins:[
     new webpack.optimize.UglifyJsPlugin(),
     new webpack.HotModuleReplacementPlugin(),
     new HtmlWebpackPlugin({
     	template:"./index.html"
     })

	]
}