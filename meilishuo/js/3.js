// console.log($);
// 根据件数的改变 结算金额改变
$('#btn_l').click(function(){
	var value = $(this).siblings('input').val();
	$(this).siblings('input').val(value - 1);
	if($(this).siblings('input').val() < 1){
		$(this).siblings('input').val(1);
	}
	var value = $(this).siblings('input').val();
	$('#del>#jiesuan').text('结算'+60*parseInt(value)+'.00'+'元');
});
$('#btn_r').click(function(){
	var value = $(this).siblings('input').val();
	$(this).siblings('input').val(parseInt(value)+parseInt(1));
	var value = $(this).siblings('input').val();
	// console.log(value);
	// console.log($('#del>button'));
	$('#del>#jiesuan').text('结算'+60*parseInt(value)+'.00'+'元');
})

// 全选

$('#table tr td .quan').click(function(){
	$('input[name="checkbox[]"]').attr('checked',true);
})

$('#table .delet').click(function(){
	$(this).parents('tr').remove();
})
$('#del>button').eq(1).click(function(){
	$('#table tr:first').siblings('tr').remove();
})
