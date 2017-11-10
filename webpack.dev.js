const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
    	proxy: {
	         '/server/': {
	             target: 'http://192.168.1.20:8083',
	             secure: false,
	             changeOrigin: true,
	             pathRewrite: {'^/api': ''}
	         },
	         '/views/': {
	             target: 'http://192.168.1.20:8081',
	             secure: false,
	             changeOrigin: true,
	             pathRewrite: {'^/api': ''}
	         }
	    },
      	contentBase: './',
      	host:"0.0.0.0",
      	port:8081,
      	overlay:{
      		errors:true,
      		warnings:true
      	},
      	compress:true,
      	hot:true
    }
});
