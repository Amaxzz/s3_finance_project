/**
 * Created by jun_li on 2017/10/30.
 */
$(function(){
    //理财产品查询
    $(".maneySel_main dd li").on("click",function(){
        var _this= $(this);
        _this.addClass("on").siblings().removeClass("on")
    })
    $(".maneySel_main .search_main .chZ").on("click",function(){
       $(".maneySel_main dd li.l1").addClass("on").siblings().removeClass("on")
    })
    //看资讯
    $("#newsTab .tab_t li").hover(function(){
        var index = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $("#newsTab .tab_c .funT-child").addClass("hide");
        $("#newsTab .tab_c .funT-child").eq(index).removeClass("hide");
    });
});