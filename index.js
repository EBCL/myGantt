jQuery(document).ready(function($) {

	var dd; //y轴坐标
	var dc; //x轴坐标
	var yuandc; //x轴原坐标
	$(".myll").mousedown(function(event) {
		yuandc = window.event.x;
		var myDDWidth = $(".myDD").width();
		$(window).bind('mousemove', function(event) {
			dc = window.event.x;
			dd = window.event.y;
			console.log(myDDWidth);
			console.log(dc - yuandc);

			if ((dc - yuandc) < myDDWidth) {
				$(".myDD").css({
					left: dc,
					width: myDDWidth - (dc - yuandc),
				});

				$(".myll").css({
					left: dc,
				});
			}
		});
	});

	$(".myoii").mousedown(function(event) {
		yuandc = window.event.x;
		var myDDWidth = $(".myDD").width();
		$(window).bind('mousemove', function(event) {
			dc = window.event.x;
			dd = window.event.y;
			console.log(myDDWidth);
			console.log(dc - yuandc);
			if ((dc - yuandc) > -myDDWidth) {
				$(".myDD").css({
					width: myDDWidth + (dc - yuandc),
				});

				$(".myoii").css({
					left: dc,
				});
			}
		});
	});

	$(window).mouseup(function(event) {
		$(window).unbind('mousemove');

	});

	

	ddc();

	scrollEvent();
});

//时间控件部分
function ddc() {
	var d = new Date();
	this.year = d.getFullYear();
	this.month = d.getMonth() + 1;
	this.day = d.getDate();

	showCC(this.year, this.month);
}


function showCC(year, month) {

	//$(".oneMonthBox").length

	var ddshow = ""; 
	var dcdc = 0;  //计算当前月有多少天
	var preMon = 0;
	var addAllDay = 0; //计算出表格中之前有多少天

	var gridy = "";
	//循环月份
	var cckc=0;
	for (var i = 0; i < 7; i++) {
		var allDayDiv = "";
		dcdc = month + i-1;
		preMon = month + i-2;
		var allDay=getDaysOfMonth(year,dcdc);
		var leftV = addAllDay*23;
		ddshow += '<div class="oneMonthBox" style="left:'+leftV+'px"><div class="thisMonth" style="width:'+(allDay*23-1)+'px">' + dcdc + '/' + year + '</div><div class="thisMonthDate">';
		addAllDay += allDay;
		//循环日期
		
		for (var j = 1; j < allDay + 1; j++) {
			cckc++;
			var leftB = j*23-23;
			var ckvva = cckc * 23-23;
			allDayDiv += '<div class="dateList" style="left:'+leftB+'px">' + j + '</div>';

			gridy += "<div class='gridy' style='left:" + ckvva + "px'></div>";
		}
	
		ddshow += allDayDiv;
		ddshow += '</div></div>'
	}

	//绘制简单的表格部分

	$(".gridlineBox").append(gridy)

	$(".candleTitle").append(ddshow);
}


/*--- 得到指定年，指定月中的天数 ----*/
function getDaysOfMonth(year, month) {
	switch (month) {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			return 31;
		case 2:
			if (year % 4 == 0)
				return 29;
			else
				return 28;
		default:
			return 30;
	}
}

//底部滚动条部分
function scrollEvent(){
	$("#scroll_bar").mousedown(function(event) {
		/* Act on the event */
		$(window).mousemove(function(event) {
			/* Act on the event */
			var cdac = window.event.x-220
			$("#scroll_bar").css({
				marginLeft:cdac
			});
			$(".candlebox").css({
				marginLeft:-cdac
			});

			$(".gridlineBox").css({
				marginLeft:-cdac
			});
		});
	});
}