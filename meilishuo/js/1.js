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
// notic区块文字特效
$('#notic>ul>li>.float_left>ul>li>a').mouseover(function(){
	$(this).css('color','#FF6699');
}).mouseout(function(){
	$(this).css('color','');
})
// 添加节点
$('#table>.row>.cont>span>a').click(function(){
	var text = $(this).text();
	$('#bread>.style').append('<span class="border" style="margin-left:5px;">'+text+'<a href="">×</a></span>')
	// console.log(text);

	return false;
});
$('#table>.row>.cont>span>a').mouseover(function(){
	$(this).css('color','#FF6699');
}).mouseout(function(){
	$(this).css('color','');
})
// console.log($('#bread>.style>span>a'));
$('#bread>.style>span>a').each(function(){
	$(this).click(function(){
		$(this).parent().remove();//获取不到新添加的节点,不会...
		return false;
	});
})
// 新品精选板块 鼠标经过文字效果
$('#new_product>.b>ul>li>.intro>a').mouseover(function(){
	$(this).css('color','#FF6699');
}).mouseout(function(){
	$(this).css('color','');
});


// 页脚区块效果
$('#footer_inner a').mouseover(function(){
	$(this).css('color','#FF6699');
}).mouseout(function(){
	$(this).css('color','');
})
//链接滚动效果
// $(function(){
	// var i = 0 ;
	// var s = null;
	// function run(){
		// s = setInterval(function(){
		
			// i+=30;
			// var top = $('#footer_link').scrollTop(i);
			// console.log(top)
			// if(i > 150){
				// i = 0;
			// }
		// },1500)
	// }
	// run();
	// $('#footer_link a').mouseover(function(){
		// $(this).css('color','#FF6699');
		// clearInterval(s);
	// }).mouseout(function(){
		// $(this).css('color','');
		// clearInterval(s);
		// run();
	// })
// })
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


