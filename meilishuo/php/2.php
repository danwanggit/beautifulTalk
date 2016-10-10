<?php
	$shop = array(
		0 => array(
			'num1' => 41,
			'num2' => 42,
			'num3' => 43,
			'shop1' => '艾格官方旗舰店',
			'shop2' => 'cocobella旗舰店',
			'shop3' => '1313气场女装',
			'intro1' => '约会浪漫初夏',
			'intro2' => '高街时尚 拒绝撞衫 全场包邮',
			'intro3' => '自成一格的原创设计气场女装',
			'sales1' => 116,
			'sales2' => 23261,
			'sales3' => 125122,
			'grade1' => 4.7,
			'grade2' => 4.7,
			'grade3' => 4.8
		),
		1 => array(
			'num1' => 44,
			'num2' => 45,
			'num3' => 46,
			'shop1' => '艾丽丝姑娘',
			'shop2' => '花心小铺专卖店',
			'shop3' => '肩尚良品',
			'intro1' => '做一枚精致的女子，不忘初心....',
			'intro2' => '花心小铺品牌于2000年由point时尚工作室推出，专为时尚女性创造潮流',
			'intro3' => '行走在肩膀的时尚，你值得拥有！么么哒~',
			'sales1' => 19769,
			'sales2' => 36099,
			'sales3' => 21382,
			'grade1' => 4.6,
			'grade2' => 4.7,
			'grade3' => 4.7
		),
		2 => array(
			'num1' => 47,
			'num2' => 48,
			'num3' => 49,
			'shop1' => '韩时尚女鞋',
			'shop2' => '唯美女人味',
			'shop3' => '伊丝妃儿',
			'intro1' => '主营日韩欧美奢华女鞋，走在时尚的前端。',
			'intro2' => '本店以最优异服务和品质，让您享受购物的乐趣。',
			'intro3' => '明星同款，款式韩风，百搭潮鞋',
			'sales1' => 126216,
			'sales2' => 57471,
			'sales3' => 116,
			'grade1' => 4.6,
			'grade2' => 4.7,
			'grade3' => 4.8
		),
		3 => array(
			'num1' => 50,
			'num2' => 51,
			'num3' => 52,
			'shop1' => '凰米',
			'shop2' => '壹克网EEKEshop',
			'shop3' => 'MUOLEO旗舰店',
			'intro1' => '卖喜欢的东西，给品味相投的人…',
			'intro2' => 'Eekeshop壹克－设计师原创首饰集合',
			'intro3' => '时尚精品尽在本店',
			'sales1' => 112265,
			'sales2' => 896,
			'sales3' => 2510,
			'grade1' => 4.8,
			'grade2' => 4.7,
			'grade3' => 4.7
		),
		4 => array(
			'num1' => 53,
			'num2' => 54,
			'num3' => 55,
			'shop1' => 'VIISHOW旗舰店',
			'shop2' => 'connive',
			'shop3' => 'V.O.P 潮品男装',
			'intro1' => '潮，是一种信仰！',
			'intro2' => '慵懒随性，拒绝约束',
			'intro3' => 'V.O.P 个性潮牌男装聚集地！',
			'sales1' => 1208,
			'sales2' => 1035,
			'sales3' => 8897,
			'grade1' => 4.7,
			'grade2' => 4.8,
			'grade3' => 4.9
		)
	);
	$id = $_GET['id'];
	$data = $shop[$id];
	echo json_encode($data);
?>