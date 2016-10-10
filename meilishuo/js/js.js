// header导航的鼠标悬停效果;
$('nav>.float_left>li>a').mouseover(function(){
    $(this).addClass('hover_nav');
}).mouseout(function(){
    $(this).removeClass('hover_nav');
});
// 登陆信息列表鼠标经过文字,字体颜色效果
$('#login li a').mouseover(function(){
	$(this).css('color','#FF6699');
}).mouseout(function(){
	$(this).css('color','');
})
// 鼠标经过list时显示隐藏块;
$('#login li').eq(6).mouseover(function(){
	$(this).children().eq(2).css('display','block');
}).mouseout(function(){
	$(this).children().eq(2).css('display','none');
})
// 搜索框效果
$('#search .search_tab>span').click(function(){
	$(this).siblings().removeClass();
	$(this).siblings().addClass('bg');
	$(this).addClass('bg1');
	$(this).addClass('color1');
});
$('#search .search_tab>span').eq(1).click(function(){
	$('#search input').removeAttr('placeholder')
});
$('#search .search_tab>span').eq(0).click(function(){
	$('#search input').attr('placeholder','夏天给我来一打拖鞋板!')
});
// 搜索框下文字搜索鼠标经过文字文字变色效果;
// console.log($('#search .search_text a'));
$('#search .search_text a').mouseover(function(){
	$(this).css('color','#FF6699');
}).mouseout(function(){
	$(this).css('color','');
})
// 主导航板块效果
$('#def_nav li a span').mouseover(function(){
	$(this).css('color','#FF6699');
	// console.log($(this).parents('li'))
	$(this).parents('li').css('border-bottom','2px solid #FF6699')
}).mouseout(function(){
	$(this).css('color','');
	$(this).parents('li').css('border-bottom','')
})
$('#def_nav li').eq(8).mouseover(function(){
	$(this).children().eq(2).css('display','block');
	$(this).children().eq(0).children().eq(1).html('<span>∧</span>');
}).mouseout(function(){
	$(this).children().eq(2).css('display','none');
	$(this).children().eq(0).children().eq(1).html('<span>∨</span>');
})
$('#def_nav li').eq(8).children().eq(2).children().mouseover(function(){
	$(this).css('background','#F4F5F6');
	$(this).children().css('color','#FF6699');
}).mouseout(function(){
	$(this).css('background','');
	$(this).children().css('color','');
})
// 主导航的固定特效
// console.log($(window));
$(window).scroll(function(){
	// console.log($(this).scrollTop());
	if($(this).scrollTop() >= 211){
		$('#def_nav').addClass('position_fixed');
		$('#def_nav').css('background','white');
		$('#def_nav').css('z-index','9');
	}else{
		$('#def_nav').removeClass();
		$('#def_nav').css('background','');
	}
});
//二级菜单特效
// 二级菜单鼠标经过文字效果
$('#content .sidebar>ul>li>p>a').mouseover(function(){
	$(this).css('color','#FF6699');
}).mouseout(function(){
	$(this).css('color','');
});
$('#content .sidebar>ul>li').mouseover(function(){
	$(this).children().eq(2).css('color','#FF6699');
	$(this).children().eq(3).css('display','block');
	$(this).children().eq(3).children().eq(0).css('border-left','1px solid white');
	
}).mouseout(function(){
	$(this).children().eq(2).css('color','');
	$(this).children().eq(3).css('display','none');
	$(this).children().eq(3).children().eq(0).css('border-left','');
});
//二级菜单块文字鼠标经过变色
$('#content .sidebar>ul>li>.head_div>div>h3').mouseover(function(){
	$(this).css('color','#FF6699');
}).mouseout(function(){
	$(this).css('color','');
});
$('#content .sidebar>ul>li>.head_div>div>p>a').mouseover(function(){
	$(this).css('color','#FF6699');
}).mouseout(function(){
	$(this).css('color','');
});
//轮播图
$(function(){
	var i = 0;
	var len = $('#lun>div>img').length;
	var s = null;
	run();
	console.log(len);
	function run(){
		s = setInterval(function(){
			i++;
			if(i > len - 1){
				i = 0;
			}
			$('#lun>div>img').eq(i).fadeIn().show().siblings('#lun>div>img').fadeOut().hide();
			// console.log($('#lun>ul>li'));
			$('#lun>ul>li').eq(i).css({'border':'2px solid white','background':'white'}).siblings('#lun>ul>li').css({'border':'','background':'none'});
			// $('#lun>ul>li')
		},2000);
	}
	$('#lun').mouseover(function(){
		clearInterval(s);
		$('#left_btn,#right_btn').css('display','block')
	}).mouseout(function(){
		$('#left_btn,#right_btn').css('display','none')
		run();
	})
	$('#lun>ul>li').click(function(){
		var i = $(this).index();
		console.log(i);
		$('#lun>div>img').eq(i).fadeIn().show().siblings('#lun>div>img').fadeOut().hide();
		$('#lun>ul>li').eq(i).css({'border':'2px solid white','background':'white'}).siblings('#lun>ul>li').css({'border':'','background':'none'});
	})
	$('#left_btn').click(function(){
		i--;
		if(i < 0){
			i = len - 1;
		}
		$('#lun>div>img').eq(i).fadeIn().show().siblings('#lun>div>img').fadeOut().hide();
		$('#lun>ul>li').eq(i).css({'border':'2px solid white','background':'white'}).siblings('#lun>ul>li').css({'border':'','background':'none'});
	})
	$('#right_btn').click(function(){
		i++;
		if(i > len - 1){
			i = 0;
		}
		$('#lun>div>img').eq(i).fadeIn().show().siblings('#lun>div>img').fadeOut().hide();
		$('#lun>ul>li').eq(i).css({'border':'2px solid white','background':'white'}).siblings('#lun>ul>li').css({'border':'','background':'none'});
	})
});
// 新品精选板块 鼠标经过文字效果
$('#new_product>.b>ul>li>.intro>a').mouseover(function(){
	$(this).css('color','#FF6699');
}).mouseout(function(){
	$(this).css('color','');
});
//时尚美妆区 鼠标经过文字效果
$('#fashion_box>.b>ul>li>.text>a').mouseover(function(){
	$(this).css('color','#FF6699');
}).mouseout(function(){
	$(this).css('color','');
})
//HI范儿的ajax效果
$('#style_box>.b>ul>li>a').each(function(){
	$(this).click(function(){
		$('#style_box>.b>ul>li>a').css({'color':'','border-bottom':''});
		$(this).css({'color':'#FF6699','border-bottom':'1px solid #FF6699'});
		var id = $(this).parent().index();
		console.log(id);
		// console.log(id);
		// console.log($('#show_box>ul>li>a'));
		$.get('./php/index.php',{'id':id},function(data){
			// alert(data.num1);
			// $('#show_box>ul>li>a>img').remove();
			// $('#show_box>ul>li>a').eq(0).append($('<img src="./imgs/'+data.num1+'.jpg" alt="">'));
			// $('#show_box>ul>li>a').eq(1).append($('<img src="./imgs/'+data.num2+'.jpg" alt="">'));
			// $('#show_box>ul>li>a').eq(2).append($('<img src="./imgs/'+data.num3+'.jpg" alt="">'));
			$('#show_box>ul>li').remove();
			// if(data.num4 != '' && data.num5 != ''){
			$('#show_box>ul').append($('<li><a href="#"><img src="./imgs/'+data.num1+'.jpg" alt=""></a></li>')).append($('<li><a href="#"><img src="./imgs/'+data.num2+'.jpg" alt=""></a></li>')).append($('<li><a href="#"><img src="./imgs/'+data.num3+'.jpg" alt=""></a></li>')).append($('<li><a href="#"><img src="./imgs/'+data.num4+'.jpg" alt=""></a></li>')).append($('<li><a href="#"><img src="./imgs/'+data.num5+'.jpg" alt=""></a></li>'));
			// }else if(data.num4 = '' && data.num5 = ''){
				// $('#show_box>ul').append($('<li><a href="#"><img src="./imgs/'+data.num1+'.jpg" alt=""></a></li>')).append($('<li><a href="#"><img src="./imgs/'+data.num2+'.jpg" alt=""></a></li>')).append($('<li><a href="#"><img src="./imgs/'+data.num3+'.jpg" alt=""></a></li>'));
			// }
		},'json')
		return false;
	})
})

// shop区块的ajax效果;
$('#shop_box>.b>ul>li>a').each(function(){
	$(this).click(function(){
		$('#shop_box>.b>ul>li>a').css({'color':'','border-bottom':''});
		$(this).css({'color':'#FF6699','border-bottom':'1px solid #FF6699'});
		var id = $(this).parent().index();
		console.log(id);
		$.get('./php/2.php',{'id':id},function(data){
			// alert(data.shop1);
			$('#shop>ul>li').remove();
			$('#shop>ul').append($('<li><img src="./imgs/'+data.num1+'.jpg" alt=""><div class="c"><a href="#">'+data.shop1+'</a><div class="d">'+data.intro1+'</div><div class="e">销量 <span>'+data.sales1+'</span>	评分 <span>'+data.grade1+'</span></div></div></li>'));
			$('#shop>ul').append($('<li><img src="./imgs/'+data.num2+'.jpg" alt=""><div class="c"><a href="#">'+data.shop2+'</a><div class="d">'+data.intro2+'</div><div class="e">销量 <span>'+data.sales2+'</span>	评分 <span>'+data.grade2+'</span></div></div></li>'));
			$('#shop>ul').append($('<li><img src="./imgs/'+data.num3+'.jpg" alt=""><div class="c"><a href="#">'+data.shop3+'</a><div class="d">'+data.intro3+'</div><div class="e">销量 <span>'+data.sales3+'</span>	评分 <span>'+data.grade3+'</span></div></div></li>'));
		},'json')
		return false;
	})
})
$('#shop>ul>li>.c>a').mouseover(function(){
	$(this).css('color','#FF6699');
}).mouseout(function(){
	$(this).css('color','');
});

// 为你精选区块效果
$('#selection>.b>ul>li>.intro>a').mouseover(function(){
	$(this).css('color','#FF6699');
}).mouseout(function(){
	$(this).css('color','');
})
$('#selection>.b>ul>li').mouseover(function(){
	$(this).children().eq(0).slideDown('show');
})
$('#selection>.b>ul>li>.shadow>.text').mouseover(function(){
	$(this).css('background','#333');
	$(this).children().eq(0).css('color','#FF6699');
}).mouseout(function(){
	$(this).css('background','');
	$(this).children().eq(0).css('color','');
})
// 页脚区块效果
$('#footer_inner a').mouseover(function(){
	$(this).css('color','#FF6699');
}).mouseout(function(){
	$(this).css('color','');
})
//链接滚动效果
$(function(){
	var i = 0 ;
	var s = null;
	function run(){
		s = setInterval(function(){
		
			i+=30;
			var top = $('#footer_link').scrollTop(i);
			console.log(top)
			if(i > 150){
				i = 0;
			}
		},1500)
	}
	run();
	$('#footer_link a').mouseover(function(){
		$(this).css('color','#FF6699');
		clearInterval(s);
	}).mouseout(function(){
		$(this).css('color','');
		clearInterval(s);
		run();
	})
})
//版权信息文字效果
$('#copyright a').mouseover(function(){
	$(this).css('color','#FF6699');
}).mouseout(function(){
	$(this).css('color','');
})
//漂浮导航设置
$('#float_nav>.bottom_nav>ul>li').mouseover(function(){
	$(this).css({'background':'#FF6699','color':'white'});
}).mouseout(function(){
	$(this).css({'background':'','color':''});
})
$('#float_nav>.return_top').mouseover(function(){
	$(this).css({'background':'#FF6699','color':'white'});
}).mouseout(function(){
	$(this).css({'background':'','color':''});
}).click(function(){
	$(window).scrollTop(0);
})

//页面1.html特效
notic区块文字特效
$('#notic>ul>li>.float_left>ul>li>a').mouseover(function(){
	$(this).css('color','#FF6699');
})