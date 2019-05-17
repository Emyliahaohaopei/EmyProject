requirejs.config({
	//baseUrl : "file:///c:/Users/Administrator/Desktop/requireJS9090/",
	paths : {
		"vali" : "scripts/jquery.validate",
		"jquery" : "scripts/jquery-2.0.3",
		"sw" : "scripts/swiper",
		"jq.cookie" : "scripts/jquery.cookie",
		"bootstrap" : "scripts/bootstrap",
		"jquery.ui" : "scripts/jquery-ui",
		"css" : "scripts/css"  //加载CSS文件的插件
	},
	shim : {
		"jq.cookie" : {
			deps : ["jquery"]
		},
		"sw" : {
			deps : ["css!styles/swiper.css"]
		},
		"bootstrap" : {
			deps : [
				"jquery",
				"css!styles/bootstrap.css"
			]
		}
	}
})