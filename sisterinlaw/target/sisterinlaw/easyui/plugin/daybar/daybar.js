$(function () {
	//初始化日期插件
	var curDate = new Date();
	setDatebar(fetchDate(curDate,15),fetchDate(curDate,0));
	$("#searchdaybar a").click(function(){
		var content = $(this).children().children().html();
		if(content=="昨天"){
			setDatebar(fetchDate(curDate,1),fetchDate(curDate,1));
		}else if(content=="近7日"){
			setDatebar(fetchDate(curDate,7),fetchDate(curDate,0));
		}else if(content=="当月"){
			setDatebar(fetchDate(curDate,"curMonthFirstDay"),fetchDate(curDate,0));
		}else if(content=="上个月"){
			setDatebar(fetchDate(curDate,"preMonthFirstDay"),fetchDate(curDate,"preMonthLastDay"));
		}
	});
});
function fetchDate(date,days){
	var cur_month = date.getMonth()+1;
	var cur_date = date.getDate();
	var cur_year = date.getFullYear(); 
	if(days==0){
		return cur_month+"/"+cur_date+"/"+cur_year;
	}else if(!isNaN(days)){
		var pre_datetime = new Date(cur_year,cur_month-1,cur_date-days);
		var pre_month = pre_datetime.getMonth()+1;
		var pre_date = pre_datetime.getDate();
		var pre_year = pre_datetime.getFullYear();
		return pre_month+"/"+pre_date+"/"+pre_year;
	}else if(days=="curMonthFirstDay"){
		var pre_datetime = new Date(cur_year,cur_month-1,1);
		var pre_month = pre_datetime.getMonth()+1;
		var pre_date = pre_datetime.getDate();
		var pre_year = pre_datetime.getFullYear();
		return pre_month+"/"+pre_date+"/"+pre_year;
	}else if(days=="curMonthLastDay"){
		var pre_datetime = new Date(cur_year,cur_month,0);
		var pre_month = pre_datetime.getMonth()+1;
		var pre_date = pre_datetime.getDate();
		var pre_year = pre_datetime.getFullYear();
		return pre_month+"/"+pre_date+"/"+pre_year;
	}else if(days=="preMonthFirstDay"){
		var pre_datetime = new Date(cur_year,cur_month-2,1);
		var pre_month = pre_datetime.getMonth()+1;
		var pre_date = pre_datetime.getDate();
		var pre_year = pre_datetime.getFullYear();
		return pre_month+"/"+pre_date+"/"+pre_year;
	}else if(days=="preMonthLastDay"){
		var pre_datetime = new Date(cur_year,cur_month-1,0);
		var pre_month = pre_datetime.getMonth()+1;
		var pre_date = pre_datetime.getDate();
		var pre_year = pre_datetime.getFullYear();
		return pre_month+"/"+pre_date+"/"+pre_year;
	}
}
function setDatebar(startDate,endDate){
	$("#endtimebar").datebox("setValue", endDate);
	$("#starttimebar").datebox("setValue",startDate);
}