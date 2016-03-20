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
	var reportId = $("#reportsearchForm input[name='reportId']").val();
	
	//chart加载数据
	reloadChart(url,reportId,view);
	//datagrid加载数据
	$('#reporttable').datagrid({   
	    url:url+'/table/'+reportId
	});  
	//绑定查询事件
	$("#reportformsubmit").click(function(){
		reloadChart(url,reportId,view);
		$('#reporttable').datagrid('reload');
	})
	//下载功能，动态拼接url，href跳转
	$("#downloadsubmit").click(function(){
		tempurl=url+'/export/'+reportId+"?";
		$.each($('#reportsearchForm input[type=\'hidden\']'), function(index,value) {
			var k = $(value).attr('name');var v=$(value).val();
			tempv=encodeURIComponent(encodeURIComponent(v))
			tempurl= tempurl + k + "=" + tempv + "&";
		})
		location.href= tempurl;
	})
});

function post(URL, PARAMS) {      
    var temp = document.createElement("form");      
    temp.action = URL;      
    temp.method = "post";      
    temp.style.display = "none";      
    for (var x in PARAMS) {      
        var opt = document.createElement("textarea");      
        opt.name = x;      
        opt.value = PARAMS[x];      
        // alert(opt.name)      
        temp.appendChild(opt);      
    }      
    document.body.appendChild(temp);      
    temp.submit();      
    return temp;      
} 


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
function reloadChart(url,reportId,view){
	if(view=="no"){
		return;
	}else{
		var param = new Object();
		$.each($('#reportsearchForm input[type=\'hidden\']'), function( index, value ) {
			var k = $(value).attr('name');var v=$(value).val();
			param[k] = v;
		});
		if(view=="line" || view=="column"){
			$.post(url+"/chart/"+reportId,param,function(data){
				var series = new Array();
				if(data.data==null){
					var obj = new Object();
					obj.name = '无数据';
					obj.data = 0;
					series.push(obj);
				}else{
					$.each(data.data, function (k, v) {  
						var obj = new Object();
						obj.name = k;
						obj.data = v;
						series.push(obj);
					});
				}
				$('#reportchart').highcharts({
					chart: {
					       type: view
					},
					title: {
			            text: data.name,
			            x: -20 //center
			        },
					yAxis: {
			            title: {text: ''},
			            plotLines: [{
			                value: 0,
			                width: 1,
			                color: '#808080'
			            }]
			        },
			        legend: {
			            layout: 'vertical',
			            align: 'right',
			            verticalAlign: 'middle',
			            borderWidth: 0
			        },
					xAxis: {categories: data.x},
					series: series
				});
			},"json");
		}
	}
}