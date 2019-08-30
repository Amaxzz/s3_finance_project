$(function(){
	//滚动快速导航
	$("#metalOwl").owlCarousel({
        itemsDesktop: [1920,3],
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        rewindNav:false,
        scrollPerPage: true,
        paginationSpeed: 400,
        mouseDrag:false
    });
    //刷新操作
    var isClick = false;
    $(".nobleRefresh .refBtn").on("click",function(){
    	if(isClick) return false;
        isClick = true;
    	var $this = $(this);
    	$this.addClass("cur");
    	//数据请求成功后显示提示复原按钮
    	setTimeout(function(){
    		$this.removeClass("cur");
    		$this.siblings(".refTip").fadeIn().delay(1000).fadeOut(function(){
    			isClick = false;
    		});
    	},1500);
    });
    $(".nobleType a").on("click", function() {
    	var index = $(this).index();
		$(this).addClass("cur").siblings().removeClass("cur");
		$(".nobleTable").hide().eq(index).fadeIn(600);
	});
    $(".nobleTable .lList").hover(function(){
    	var parent = $(this).parents(".nobleTable");
		var htmlY = '<div class="cBg"></div>';
		if(parent.find(".cBg").length == 0){
			parent.append(htmlY);
		};
		var pos = $(this).position();
 		var lTop = pos.top;
 		parent.find(".cBg").css({
 			"top": lTop-8
 		}).show();
 	},function(){
 		var parent = $(this).parents(".nobleTable");
 		parent.find(".cBg").hide();
 	})
});