
var main = function(){
	//$('.main-title').click(function(){

		$('#b').hide().delay(200).fadeIn(500);
		$('#l1').hide().delay(300).fadeIn(490);
		$('#i').hide().delay(400).fadeIn(480);
		$('#t').hide().delay(500).fadeIn(470);
		$('#z').hide().delay(600).fadeIn(460);
		$('#s').hide().delay(700).fadeIn(450);
		$('#c').hide().delay(800).fadeIn(440);
		$('#h').hide().delay(900).fadeIn(430);
		$('#l2').hide().delay(1000).fadeIn(420);
		$('#a').hide().delay(1100).fadeIn(410);
		$('#g').hide().delay(1200).fadeIn(400);
		$('#co').hide().delay(1300).fadeIn(390);
		$('#1').hide().delay(1400).fadeIn(380);
		$('#6').hide().delay(1500).fadeIn(370);
		$('#line1').animate({
			width:"500"
		},1200);
		$('#line2').animate({
			width:"400"
		},1000);
		$('#line3').animate({
			width:"300"
		},800);
		$('#line4').animate({
			width:"200"
		},600);
		$('#line5').animate({
			width:"100"
		},400);
		$('#lineb1').animate({
			width:"100px"
		},400);
		$('#lineb2').animate({
			width:"200px"
		},600);
		$('#lineb3').animate({
			width:"300px"
		},800);
		$('#lineb4').animate({
			width:"400px"
		},1000);
		$('#lineb5').animate({
			width:"500px"
		},1200);
		$('#button-home').click(function(){
			$(this).fadeOut(400);
			$('#index').animate({
			left:"-100%"
		},1000);
		$('#button-hint').hover(function(){
			color:"#adfe12"
			},1000);
		});
		
};


$(document).ready(main);
