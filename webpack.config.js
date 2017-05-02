var webpack = require('webpack');var path = require('path');// var ExtractTextPlugin = require("extract-text-webpack-plugin");module.exports = {	entry : {   // 入口文件		index : './src/index',		vendor:['react','react-dom','react-router']	},	output: {   	// __dirname : 是node.js中的一个全局变量，它指向当前执行脚本所在的目录。		path:__dirname + '/dist/',		filename:'[name].js',     // 当通过多个入口起点、代码拆分或各种插件创建多个bundle文件时，生成不同的唯一的bundle文件		publicPath:'dist/'	},	module:{		 rules:[{			 test: /\.(js|jsx)$/,			 loader: "babel-loader",			 options: {			   presets: ['es2015', 'react']	     },			 exclude:/node_modules/,      //  排除   node_modules		 },{			test:/\.css$/,			 use:[				'style-loader',				'css-loader'			],			exclude:/node_modules/,		},{			test:/\.less$/,			use:[         // 链式操作，从下往上操作，编译 （同webpack 1.x 中 style-loader!css-loader!less-loader  从右往左进行操作编译）				'style-loader',				'css-loader',				'less-loader'			],			exclude:/node_modules/,		},{			test:/\.(jpg|png|gif)$/,		  exclude:/node_modules/,		  use:'url-loader?limit=8192'	 }]	},	resolve:{		modules:[path.resolve(__dirname,'src'),'node_modules'],   // 将src添加到搜索目录，且src目录优先'node_modules'搜索。modules: [],告诉 webpack 解析模块时应该搜索的目录.默认为node——modules		extensions:['.js','.jsx','.json'],    // 自动解析确定的扩展名（js/jsx/json),能够使用户在引入模块时不带扩展		alias: {}  // 创建 import 或 require 的别名，来确保模块引入变得更简单	},	devtool: "source-map",   // 生成完整的源码文件，便于调试	plugins:[		new webpack.DefinePlugin({			'process.env':{				'NODE_ENV': JSON.stringify('production')  // 定义全局变量NODE_ENV			}		}),		new webpack.optimize.UglifyJsPlugin({			sourceMap: true,     //当你的js编译压缩后，需要继续读取原始脚本信息的行数，位置，警告等有效调试信息时,手动开启UglifyJsPlugin 的配置项：sourceMap: true 。			compress: {				warnings: false			}		}),		new webpack.LoaderOptionsPlugin({			minimize: true		}),		new webpack.optimize.CommonsChunkPlugin(['vendor']),  // 运用插件，将公用的模块抽取到vendor文件中		// new ExtractTextPlugin('[name].css'),		//new webpack.HotModuleReplacementPlugin(),	],	watch:true,};