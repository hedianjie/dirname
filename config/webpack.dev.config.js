const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const routers = require('./router.js');
// 插件引入
const defEntry = {
	"vendor": "./config/vendor.js"
};
// 设置插件全局名
const defPlugins = [
	new webpack.ProvidePlugin({
		"$": "jquery",
		"jQuery": "jquery",
		"global": path.join(__dirname, '../dist/global/global.js'),
		"jeDate": path.join(__dirname, '../dist/assets/jedate/jedate.js')
	})
]
let entry = {};
let plugins = [];

const getHtmlConfig = (name, title) => {
	return {
		template : `./dist/view/${name}.html`,	// 生成模板文件
		filename : `${name}.html`,				// 生成模板文件名称（html路由）
		title: title,							// 生成模板标题
		inject: true,
		hash: true,								// 是否清除css、js文件缓存
		chunks : ["vendor", name],				// 引入文件
	}
}

routers.forEach((item, index) => {
	entry[item.name] = item.entry;
	plugins.push(new HtmlWebpackPlugin(getHtmlConfig(item.name, item.title)));
});

entry = Object.assign({}, defEntry, entry);
plugins = defPlugins.concat(plugins);


module.exports = {
	entry,
	plugins,
	output: {
		path: path.join(__dirname, './build'),
		filename: '[name].js'
	},
	devServer: {
		host: "127.0.0.1",
		port: 8070
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			// {
			// 	test: /\.string$/,
			// 	loader: 'html-loader',
			// },
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpe?g|gif|svg|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
			},
		]
	}
}
