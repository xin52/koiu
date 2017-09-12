var webpack=require("webpack")
var HtmlWebpackPlugin=require("html-webpack-plugin")
module.exports={
	entry:__dirname+"/src/main.js",
	output:{
		path:__dirname+"/dist",
		filename:'[name].js',
		chunkFilename:'[name].js'
	},
	module:{
		rules:[
            {
            	test:/\.js$/,
            	loader:"babel-loader"
            },
            {
            	test:/\.vue$/,
            	include:/src/,
            	loader:"vue-loader"
            },
            {
            	test:/\.css$/,
               use:['style.loader','css.loader']
            },
	         {
	          	  test:/\.jpg|.png$/,
	            loader:'url.loader'
	          }
    
		]
	},
	devServer:{
       port:9988,
       host:"127.0.0.1",
       hot:true,
       contentBase:__dirname+"./src/static",
       watchContentBase:true
	},
	plugins:[
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.HtmlWebpackPlugin({
			template:"./index.html"
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name:"common"
			filename:'common',

		})
	]
}