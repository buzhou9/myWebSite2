const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
	   	contentBase: './',
	   	host:"0.0.0.0",
		port:'8081',
		hot: true,
		compress:true,//启用压缩
		overlay:{
      		errors:true,
      		warnings:true
      	},
      	proxy: {
	         '/server/': {
	             target: 'http://192.168.1.20:8083',
	             changeOrigin: true,
	             pathRewrite: {'^/api': ''}
	         }
	    },
    }
});
