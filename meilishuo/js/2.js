// header效果
// console.log($('#header>.width>.float_r>ul>li>a'));
$('#header>.width>ul>li>a').mouseover(function(){
	$(this).css('color','#FF6699');
}).mouseout(function(){
	$(this).css('color','');
})
// 放大镜效果
$('#fang_box1').mouseover(function(){
	$('#shadow').css('display','block');
	$('#fang_box2').css('display','block');
	
}).mouseout(function(){
	$('#shadow').css('display','none');
	$('#fang_box2').css('display','none');
}).mousemove(function(ent){
	var e = ent || event;
	var left = e.pageX - $(this).offset().left - $('#shadow').width()/2;
	var top = e.pageY - $(this).offset().top - $('#shadow').width()/2;
	
	if(left < 0){
		left = 0;
	} else if(left > $(this).width() - $('#shadow').width()){
		left = $(this).width() - $('#shadow').width();
	};
	if(top < 0){
		top = 0;
	} else if(top > $(this).height() - $('#shadow').height()){
		top = $(this).height() - $('#shadow').height();
	}
	
	$('#fang_box2').scrollLeft(left*800/400);
	$('#fang_box2').scrollTop(top*1039/520);
	
	$('#shadow').css({'left':left,'top':top});
})
// 放大镜联动效果
$('#fang>ul>li>.ceng1').click(function(){
	$('#fang>ul>li>.ceng1').css('opacity',0.5);
	$(this).css('opacity',0);
	var src = $(this).siblings('img').attr('src');
	$('#small').attr('src',src);
	$('#big').attr('src',src);
	$('#fang>ul>li').css('border','none');
	$(this).parent().css('border','2px solid red')
})
// 购物车数量效果
$('#btnl').click(function(){
	var i = 1;
	var value = $('#inp>input').val() - i;
	$('#inp>input').val(value);
	if($('#inp>input').val() < 1){
		$('#inp>input').val(1);
	}
})
$('#btnr').click(function(){
	var value = (parseInt($('#inp>input').val()) + parseInt(1));
	
	if ( value > 99 ){
		value = 99;
	}
	$('#inp>input').val(value);
})
// 购物车弹框
$('#cont>.width>.float_l>.middle>.shopcare>.care').click(function(){
	$('#cont>.width>.float_l>.middle>.go_care').css('display','block');
})
$('#cont>.width>.float_l>.middle>.go_care').click(function(){
	$(this).remove();
})
// //评价区联动导航
// console.log($('#snav>li'))
// $('#snav>li').click(function(){
	// var i = $(this).index();
	// console.log(i);
	// $('#cont>.width>.center>.img>img').removeAttr('src');
	// $('#cont>.width>.center>.img>img').attr('src','./imgs/f+'i+'.png');
	// // $('#cont>.width>.center>.img>img').css('src','./imgs/f'+i+'.png');
	// // $('#snav').sibings('.img')
// })