/**
 * jQuery jslides 1.1.0
*/
$.fn.extend({          
    slideBox:function() {   
    	var slideBox = $(this);
    	var screenW = $(window).width();
		$(window).resize(function() {
			screenW = $(window).width();
		});
		var numpic = slideBox.find('.boxItem li').size()-1;
		var nownow = 0;
		var inout = 0;
		var TT = null;
		var SPEED = 5000;
		slideBox.find('.boxItem li').eq(0).siblings('li').css({'display':'none'});
		var ulstart = '<ul class="boxPage">',
			ulcontent = '',
			ulend = '</ul>';
		ADDLI();
		var pagination = slideBox.find('.boxPage li');
		var paginationwidth = slideBox.find('.boxPage').width();
		slideBox.find('.boxPage').css('margin-left',(470-paginationwidth))
		pagination.eq(0).addClass('current')
		function ADDLI(){
			for(var i = 0; i <= numpic; i++){
				ulcontent += '<li>' + '<a href="javascript:;">' + (i+1) + '</a>' + '</li>';
			}
			slideBox.find('.boxItem').after(ulstart + ulcontent + ulend);	
		}
		pagination.on('click',DOTCHANGE)
		function DOTCHANGE(){
			var changenow = $(this).index();
			if(changenow == nownow) return false;
			var moveW = nownow < changenow ? screenW : -screenW;
			slideBox.find('.boxItem li').eq(nownow).css('left','0');
			slideBox.find('.boxItem li').eq(changenow).css({'left': moveW}).show();
			pagination.eq(changenow).addClass('current').siblings('li').removeClass('current');
			slideBox.find('.boxItem li').eq(nownow).animate({"left": -moveW},600);
			slideBox.find('.boxItem li').eq(changenow).animate({"left": 0},600);
			nownow = changenow;
		}
		slideBox.mouseover(function(){
			clearTimeout(TT);
		});
		slideBox.mouseleave(function(){
			TT = setTimeout(GOGO, SPEED);
		});
		function GOGO(){
			var changenow = nownow+1;
			if(nownow < numpic){
				slideBox.find('.boxItem li').eq(nownow).css('left','0');
				slideBox.find('.boxItem li').eq(changenow).css({'left': screenW}).show();
				pagination.eq(changenow).addClass('current').siblings('li').removeClass('current');
				slideBox.find('.boxItem li').eq(nownow).animate({"left": -screenW},600);
				slideBox.find('.boxItem li').eq(changenow).animate({"left": 0},600);
				nownow += 1;
			}else{
				changenow = 0;
				slideBox.find('.boxItem li').eq(nownow).css('left','0');
				slideBox.find('.boxItem li').eq(changenow).stop(true,true).css({'left': screenW}).show();
				pagination.eq(changenow).addClass('current').siblings('li').removeClass('current');
				slideBox.find('.boxItem li').eq(nownow).animate({"left": -screenW},600);
				slideBox.find('.boxItem li').eq(changenow).animate({"left": 0},600);
				nownow=0;
			}
			TT = setTimeout(GOGO, SPEED);
		}
		TT = setTimeout(GOGO, SPEED);             
    }       
});   
