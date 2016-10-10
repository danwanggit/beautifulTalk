<?php
	$show = array(
		0 => array(
			'num1' => 27,
			'num2' => 28,
			'num3' => 29,
			'num4' => '',
			'num5' => ''
		),
		1 => array(
			'num1' => 30,
			'num2' => 31,
			'num3' => 32,
			'num4' => '',
			'num5' => ''
		),
		2 => array(
			'num1' => 33,
			'num2' => 34,
			'num3' => 35,
			'num4' => '',
			'num5' => ''
		),
		3 => array(
			'num1' => 36,
			'num2' => 37,
			'num3' => 38,
			'num4' => 39,
			'num5' => 40
		)
	);
	$id = $_GET['id'];
	$data = $show[$id];
	echo json_encode($data);
?>