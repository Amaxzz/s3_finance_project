/**
 * Created by jun_li on 2017/5/19.
 */
$(function (){
    //head切换
    $(".head_l li").on("click",function(){
        var _this =$(this);
        _this.addClass("on").siblings().removeClass("on")
    });
    $(".navigation-v3 li").click(function(){
      $(this).addClass("on").siblings().removeClass("on")
    });
    //文字变颜色
    $('.down-main-sh td p,.down-main-di p,.tzlc1_a a,.action_Y_main .l p,.login_center td,.tzlc5 .tzlc1_mainL .l .tzlc_main li,.notice_main p,.top_main  p,.footer_l li,.action_M .l .action_M_other p').hover(function(){
        var _this = $(this);
        if(_this.hasClass("on")){
            _this.removeClass("on")
        }else {
            _this.addClass("on")
        }
    });
    //导航条选择菜单
    var qcloud={};
    $('[_t_nav]').hover(function(){
        var _nav = $(this).attr('_t_nav');
        clearTimeout( qcloud[ _nav + '_timer' ] );
        qcloud[ _nav + '_timer' ] = setTimeout(function(){
            $('[_t_nav]').each(function(){
                $(this)[ _nav == $(this).attr('_t_nav') ? 'addClass':'removeClass' ]('nav-up-selected');
            });
            $('#'+_nav).stop(true,true).slideDown(500);
        }, 150);
    },function(){
        var _nav = $(this).attr('_t_nav');
        clearTimeout( qcloud[ _nav + '_timer' ] );
        qcloud[ _nav + '_timer' ] = setTimeout(function(){
            $('[_t_nav]').removeClass('nav-up-selected');
            $('#'+_nav).stop(true,true).slideUp(1);
        }, 150);
    });
    //导航条绑定滚动条事件
    $(window).bind("scroll", function () {
        var sTop = $(window).scrollTop();
        var sTop = parseInt(sTop);
        if (sTop >= 120) {
            $(".nav").addClass("on");
        }
        else {
            $(".nav").removeClass("on");
        }
    });
    //通知
    $.fn.textSlider = function(options){
        var defaults = { //初始化参数
            scrollHeight:30,
            line:1,
            speed:'1500',
            timer:2000
        };
        var opts = $.extend(defaults,options);
        this.each(function(){
            var timerID;
            var obj = $(this);
            var $ul = obj.find("ul");
            var $height = $ul.find("li").height();
            var $Upheight = 0-opts.line*$height;
            obj.hover(function(){
                clearInterval(timerID);
            },function(){
                timerID = setInterval(moveUp,opts.timer);
            });
            function moveUp(){
                $ul.animate({"margin-top":$Upheight},opts.speed,function(){
                    for(i=0;i<opts.line;i++){ //只有for循环了才可以设置一次滚动的行数
                        $ul.find("li:first").appendTo($ul);
                    }
                    $ul.css("margin-top",0);
                });
            };
            timerID = setInterval(moveUp,opts.timer);
        });
    };
    $(".notice_main").textSlider({
        line:1
    });
	//快速入口
    $("#serveBox li").hover(function(){
        var _this =$(this);
        if(_this.hasClass("on")){
            _this.find(".serveBoxDown").slideUp(1);
            _this.removeClass("on")
        }else {
            _this.find(".serveBoxDown").slideDown(200);
            _this.addClass("on").siblings().removeClass("on");
        }
    });
    //侧栏
    $("#sideBox li").hover(function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on");
            $(this).find(".zk-box").stop().animate({width:"0"},400)
        }else {
            $(this).addClass("on");
            $(this).find(".zk-box").stop().animate({width:"292"},400)
        }
    });
    //侧栏绑定滚动条事件
    $(window).bind("scroll", function () {
        var sTop = $(window).scrollTop();
        var sTop = parseInt(sTop);
        if (sTop >= 800) {
            if (!$("#btn3").is(":visible")) {
                try {
                    $("#btn3").slideDown();
                } catch (e) {
                    $("#btn3").show();
                }
            }
        }
        else {
            if ($("#btn3").is(":visible")) {
                try {
                    $("#btn3").slideUp();
                } catch (e) {
                    $("#btn3").hide();
                }
            }
        }
    });
    //选择框
    $('.tzlc1_mainL .top li,.top_main_two .JJselect').click(function() {
         $(this).addClass("on")
    });
    $('select').click(function() {
        clearpop();
    });
    //轮播图配置
    $("#owl-kv,#owl-tzlc1,#owl-action_Y").owlCarousel({
        items: 4,
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        rewindNav:true,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: 5000,
        mouseDrag:false,
        video:true
    });
    $("#fastNav-owl").owlCarousel({
        itemsDesktop: [1035,5],
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        rewindNav:false,
        scrollPerPage: true,
        paginationSpeed: 400,
        mouseDrag:false
    });
    $("#card-owl").owlCarousel({
        items: 2,
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        rewindNav:true,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: false,
        mouseDrag:false,
        video:true
    });
    $("#ytop_owl,#ytop_owl2").owlCarousel({
        items: 2,
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        rewindNav:true,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: 2000,
        mouseDrag:false,
        video:true
    });
    $(".youh-nav #tab_ttt li").hover(function(){
        var _this = $(this);
        _this.addClass("active").siblings().removeClass("active")
        var index = $(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
        $("#tab_ctt> ul").eq(index).show().siblings().hide(); //在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
    });
});
function clearpop() {
    $('.sel span,.select_main span').each(function(i) {
        $(this).html($(this).next().find("option:checked").text())
    })
}