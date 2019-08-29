$(function (){

 $(".navigation-v3-icbc li").hover(function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on");
            $(this).css("background","#c7000b");
        }else {
            $(this).addClass("on");
            $(this).css("background","#af0812");
        }
    });


	  $('.nav-down-menu-icbc').each(function () {
                var id = $(this).attr('id');
                $(this).attr('_z_nav', id); //ͬ����ֵ_z_nav����
                var index = $(this).index();
                $('.navigation-v3-icbc ul li').eq(index).find("a").first().attr('_z_nav', id);                
            });


  //������ѡ��˵�
    var qcloud={};
    $('[_z_nav]').hover(function(){
        var _nav = $(this).attr('_z_nav');
        clearTimeout( qcloud[ _nav + '_timer' ] );
        qcloud[ _nav + '_timer' ] = setTimeout(function(){
            $('[_z_nav]').each(function(){
                $(this)[ _nav == $(this).attr('_z_nav') ? 'addClass':'removeClass' ]('nav-up-selected');
            });
            $('#'+_nav).stop(true,true).slideDown(500);
        }, 150);
    },function(){
        var _nav = $(this).attr('_z_nav');
        clearTimeout( qcloud[ _nav + '_timer' ] );
        qcloud[ _nav + '_timer' ] = setTimeout(function(){
            $('[_z_nav]').removeClass('nav-up-selected');
            $('#'+_nav).stop(true,true).slideUp(1);
        }, 150);
    });

    //�������󶨹������¼�
	var navTop=$('.nav-icbc').position().top;
    $(window).bind("scroll", function () {
        var sTop = $(window).scrollTop();
        var sTop = parseInt(sTop);
        if (sTop >= navTop) {
            $(".nav-icbc").addClass("on");
        }
        else {
            $(".nav-icbc").removeClass("on");
        }
    });

});

