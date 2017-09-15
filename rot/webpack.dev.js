var webpack=require("webpack");
var HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
    entry:__dirname+"/src/main.js",
    output:{
        path:__dirname+"/dist",
        filename:"[name].js"
    },
    module:{
        rules:[{
            test:/\.js$/,
            loader:"babel-loader"
        },
        {
            test:/\.vue$/,
            loader:"vue-loader"
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
            test:/\.png | .jpg$/,
            loader:"url-loader"
        }
        ]
    },
    resolve:{
        alias:{
            "vue":"vue/dist/vue.js"
        }
    },
    devServer:{
        port:8088,
        host:"127.0.0.1",
        hot:true,
        compress: true,
        watchContentBase: true,
        setup(app){
            app.get("/some/path",function(req,res){
               
      var arr=  [{
            "name":"音乐"
        },{
            "name":"历史"
        },{
            "name":"你我天地"
        },{
            "name":"人文地理"
        },{
            "name":"付费精品"
        },{
            "name":"脱口秀"
        },{
            "name":"娱乐"
        },{
            "name":"英语"
        },{
            "name":"教育培训"
        },{
            "name":"搭理"
        },{
            "name":"健康养生"
        },{
            "name":"头条"
        },{
            "name":"音乐"
        },{
            "name":"历史"
        },{
            "name":"情感生活"
        },{
            "name":"人文"
        },{
            "name":"精品时尚"
        },{
            "name":"脱口秀"
        },{
            "name":"娱乐"
        },{
            "name":"英语"
        },{
            "name":"教育培训"
        },{
            "name":"大理石"
        },{
            "name":"健康"
        },{
            "name":"美丽"
        }]
           res.json(data)
            
        })
        }
        //contentBase:__dirname + 'dist'
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:"./index.html"
        })
    ]
}