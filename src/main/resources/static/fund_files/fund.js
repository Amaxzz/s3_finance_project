$(function() {
	//选择高级搜索
	$(".bottom_main li").click(function(){
		var _this= $(this);
		_this.addClass("now").siblings().removeClass("now")
	});
	$(".bottom_main li").click(function(){
		var _this= $(this);
		_this.addClass("on").siblings().removeClass("on")
	});
	$(".shenZ td").on("click",function(){
		var _this= $(this);
		_this.parents().find("li").not(".on").find("td").removeClass("red");
		_this.addClass("red").siblings().removeClass("red");
	});
	$(".flow-btn p").on("click",function(){
		var _this= $(this);
		if(_this.hasClass("on")){
			_this.removeClass("on");
			_this.html('<p>更多选项∨</p>')
			$(".bottom_main dl").stop().animate({height:"310"},400)
		}
		else{
			_this.addClass("on");
			_this.html('<p>收起∧</p>')
			$(".bottom_main dl").stop().animate({height:"492"},400)
		}
	});
	//去除所有条件
	$(".funScreen .clearn_btn").on("click",function(){
		$(".bottom_main td").removeClass("red");
		$(".bottom_main li").removeClass("on");
		$(".shenZ td").removeClass("red");
		$(".bottom_main li:nth-child(2)").addClass("now").siblings().removeClass("now");
	});
	createStar();
	$(".sortChange").on("click", function() {
		$(".sortChange").not(this).find("i").removeClass().addClass("default");
		if($(this).find("i").hasClass("down")) {
			$(this).find("i").removeClass().addClass("up");
		} else {
			$(this).find("i").removeClass().addClass("down");
		}
	});
	$(".sortChange .ent").on("click", function() {
		$(".sortChange .ent").not(this).find("i").removeClass().addClass("default");
		if($(this).find("i").hasClass("down1")) {
			$(this).find("i").removeClass().addClass("up1");
		} else {
			$(this).find("i").removeClass().addClass("down1");
		}
	})
	$(".funCont .lList").hover(function(){
		var htmlY = '<div class="cBg"></div>';
		if($(".funCont .cBg").length == 0){
			$(".funCont").append(htmlY);
		};
		var pos = $(this).position();
 		var lTop = pos.top;
 		$(".funCont .cBg").css({
 			"top": lTop-8
 		}).show();
 	},function(){
 		$(".funCont .cBg").hide();
 	})
	$(".funType a").on("click", function() {
		$(this).addClass("cur").siblings().removeClass("cur");
		var i = $(this).attr("data-page");
		$(".funCont").hide();
		$(".list"+i).show();
	});
	//收益排行
	$("#tab_t li").on("click",function() {
		var _this = $(this);
		_this.addClass("on").siblings().removeClass("on")
		var index = $(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
		$("#tab_c> div").eq(index).show().siblings().hide(); //在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
	});
	$("#sortTab li").on("click",function() {
		var _this = $(this);
		_this.addClass("on").siblings().removeClass("on")
		var index = $(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
		$("#sortTab .tab_c> div").eq(index).show().siblings().hide(); //在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
	});
	$(".mRight .funT-child tr").hover(function(){
		$(this).find(".num").addClass("hide");
		$(this).find("a").removeClass("hide");
	},function(){
		$(this).find(".num").removeClass("hide");
		$(this).find("a").addClass("hide");
	})
	//收益排行月份下拉
	$(".middle .mRight .th-3,.funT-child .th-3").find("p").hover(function(){
		$(this).parent().find(".selBox").show();
	},function(){
		$(this).parent().find(".selBox").hide();
	});
	$(".middle .mRight .selBox,.funT-child .selBox").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	})
	$(".middle .mRight .selBox li").on("click",function(){
		var liTxt = $(this).text() + '<i class="icon_sort"></i>';
		$(".middle .mRight .th-3 p").html(liTxt);
		$(this).parents(".selBox").hide();
	});
    //主题基金
    $("#serverTab li").hover(function() {
        var _this = $(this);
        _this.addClass("on").siblings().removeClass("on")
        var index = $(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
        $("#serverTab .tab_c> div").eq(index).show().siblings().hide(); //在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
    });
    //基金对比
    $("#contrast-hide").click(function(){
        var _this= $(this);
        if(_this.hasClass("on")){
            _this.removeClass("on");
            _this.html('<p>显示</p>');
            $(".fund-contrast").stop().animate({height:"34"},400)
        }
        else{
            _this.addClass("on");
            _this.html('<p>隐藏</p>');
            $(".fund-contrast").stop().animate({height:"166"},400)
        }
    });
    $(".fund-db p").click(function(){
        var _this = $(this).find("span");
        var i = $(this).find("span").attr("data-page");
        if(_this.hasClass("on")){
            _this.removeClass("on");
            $(".lis"+i).hide()
        }
        else{
            _this.addClass("on");
            $("#contrast-hide").html('<p>隐藏</p>');
            $(".fund-contrast").stop().animate({height:"166"},400)
            $(".lis"+i).show()
        }
    })
    //清空对比
    $("#clear-btn").click(function(){
        $(".fund-contrast ul li").hide()
         $(".fund-db span").removeClass("on")
    });
    $(".company-more li .picBox,.fund-search .bottom li span").hover(function(){
    	$(this).addClass("on");
    },function(){
    	$(this).removeClass("on")
    });
    //调整字号
    $("#fundMore .font-btn li").on("click",function(){
       var _this = $(this);
       _this.addClass("on").siblings().removeClass("on")
    });
    $("#fundMore .font-btn .l1").on("click",function(){
        $("#fundMore .inf-main p").css("font-size","20px")
        $("#fundMore .inf-main h1").css("font-size","20px")
    });
    $("#fundMore .font-btn .l2").on("click",function(){
        $("#fundMore .inf-main p").css("font-size","16px")
        $("#fundMore .inf-main h1").css("font-size","16px")
    });
    $("#fundMore .font-btn .l3").on("click",function(){
        $("#fundMore .inf-main p").css("font-size","14px")
        $("#fundMore .inf-main h1").css("font-size","14px")
    });
})
//星级插件初始化
function createStar() {
	//星级插件地址
	//http://www.jq22.com/yanshi291
	$.fn.raty.defaults.path = 'public/images/icon/';
	$('.star').raty({
		width: 85,
		readOnly: true,
		score: function() {
			return $(this).attr('data-score');
		}
	});
}