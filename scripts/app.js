
var date1 = new Date("03/15/2016").getTime();
var date2 = new Date().getTime();
function timer(){
	var date1 = new Date("04/8/2016").getTime();
	var date2 = new Date().getTime();
	var ti=(date1-date2);
	if(ti<=0){
        document.getElementById("timer").innerHTML= '<div style="font-size:60px">See You next Year</div>';
		return;
	}
	var s = Math.ceil(ti/(1000));
	var d = Math.floor(s/(60*60*24));
	s = Math.ceil(s%(60*60*24));
	var h = Math.floor(s/(60*60));
	s = Math.ceil(s%(60*60));
	var m = Math.floor(s/(60));
	s = Math.ceil(s%(60)); 	
	if(d<10)
		d = "0"+d;
	if(h<10)
		h = "0"+h;
	if(m<10)
		m = "0"+m;
	if(s<10)
		s = "0"+s;
	
    if(d>0)
        document.getElementById("daysC").innerHTML= ""+d+"";
    document.getElementById("hoursC").innerHTML= ""+h+"";
    document.getElementById("minutesC").innerHTML= ""+m+"";
    document.getElementById("secondsC").innerHTML= ""+s+"";
    
}
setInterval('timer()',1000);





/*
var goup=function(){
		$('.home').animate({
			top:"-100%"
			},1000);
		$('#main-title').animate({
			top:"-80%"
			},1000);
		$('#lined').animate({
			top:"-60%"
			},1000);
		$('.events').animate({
			top:"0%"
        },1000);
		$("#go-button-up").animate({
			top:"90%"
        },1000);
        $("#go-button-down").animate({
			top:"-10%"
        },1000);
        $(".scene").animate({
            top:"-110%"
        },1000);
        $(".head").animate({
			top:"2%",
            opacity:1
        },1000);
        
        $("#timer").animate({
			top:"-40%",
            opacity:-2
        
        },1000);
        
}
var godown=function(){
		$('.home').animate({
			top:"0%"
			},1000);
		$('#main-title').animate({
			top:"20%"
			},1000);
		$('#lined').animate({
			top:"40%"
			},1000);
		$('.events').animate({
			top:"100%"
        },1000);
        $("#go-button-up").animate({
			top:"190%"
        },1000);
        $("#go-button-down").animate({
			top:"90%"
        },1000);
        $(".head").animate({
			top:"-10%",
            opacity:0
        },1000);
        $(".scene").animate({
            top:"-10%"
        },1000);
        $("#timer").animate({
			top:"60%",
            opacity:1
        },1000);
}*/
var main = function(){
   
};

$(document).ready(main);
