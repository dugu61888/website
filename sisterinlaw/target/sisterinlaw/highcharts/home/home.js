var chart={
	"gmvTotal":function(x,gmv,ratio){
		$('#ichart1').highcharts({
	        chart: {
	            zoomType: 'xy'
	        },
	        title: {
	            text: '全国总票房+线上转化率'
	        },
	        xAxis: [{
	            categories: x
	        }],
	        yAxis: [{ // Primary yAxis
	            labels: {
	                format: '{value}',
	                style: {
	                    color: '#C0C0C0'
	                }
	            },
	            title: {
	                text: '全国总票房',
	                style: {
	                    color: '#C0C0C0'
	                }
	            }
	        }, { // Secondary yAxis
	            title: {
	                text: '线上化率',
	                style: {
	                    color: '#89A54E'
	                }
	            },
	            labels: {
	                format: '{value}%',
	                style: {
	                    color: '#89A54E'
	                }
	            },
	            opposite: true
	        }],
	        tooltip: {
	            shared: true
	        },
	        series: [{
	            name: '全国总票房',
	            color: '#C0C0C0',
	            type: 'area',
	            data: gmv
	        },{
	            name: '线上化率',
	            color: '#89A54E',
	            type: 'spline',
	            yAxis: 1,
	            data: ratio,
	            tooltip: {
	                valueSuffix: '%'
	            }
	        }]
	    });
	},
	"gmvSeat":function(x,dp,my){
		$('#ichart2').highcharts({
	        chart: {
	            type: 'area'
	        },
	        title: {
	            text: '选作交易额'
	        },
	        xAxis: {
	            categories: x,
	            tickmarkPlacement: 'on',
	            title: {
	                enabled: false
	            }
	        },
	        yAxis: {
	            title: {
	                text: '交易额'
	            },
	            labels: {
	                formatter: function() {
	                    return this.value / 1000;
	                }
	            }
	        },
	        tooltip: {
	            shared: true,
	            valueSuffix: ''
	        },
	        plotOptions: {
	            area: {
	                stacking: 'normal',
	                lineColor: '#666666',
	                lineWidth: 1,
	                marker: {
	                    lineWidth: 1,
	                    lineColor: '#666666'
	                }
	            }
	        },
	        series: [{
	            name: '点评选座GMV',
	            data: dp
	        }, {
	            name: '猫眼选座GMV',
	            data: my
	        }]
	    });
	},
	"gmvProduct":function(x,dp,my){
		$('#ichart3').highcharts({
	        chart: {
	            type: 'area'
	        },
	        title: {
	            text: '卖品交易额'
	        },
	        xAxis: {
	            categories: x,
	            tickmarkPlacement: 'on',
	            title: {
	                enabled: false
	            }
	        },
	        yAxis: {
	            title: {
	                text: '交易额'
	            },
	            labels: {
	                formatter: function() {
	                    return this.value / 1000;
	                }
	            }
	        },
	        tooltip: {
	            shared: true,
	            valueSuffix: ''
	        },
	        plotOptions: {
	            area: {
	                stacking: 'normal',
	                lineColor: '#666666',
	                lineWidth: 1,
	                marker: {
	                    lineWidth: 1,
	                    lineColor: '#666666'
	                }
	            }
	        },
	        series: [{
	            name: '点评卖品交易额',
	            data: dp
	        }, {
	            name: '猫眼卖品交易额',
	            data: my
	        }]
	    });
	},
	"ticketTotal":function(x,count,ratio){
		$('#ichart4').highcharts({
	        chart: {
	            zoomType: 'xy'
	        },
	        title: {
	            text: '大盘线上出票量&线上化率'
	        },
	        xAxis: [{
	            categories: x
	        }],
	        yAxis: [{ // Secondary yAxis
	            title: {
	                text: '线上化率%',
	                style: {
	                    color: '#89A54E'
	                }
	            },
	            labels: {
	                format: '{value}%',
	                style: {
	                    color: '#89A54E'
	                }
	            },
	            opposite: true
	        },{ // Primary yAxis
	            labels: {
	                format: '{value}',
	                style: {
	                    color: '#4572A7'
	                }
	            },
	            title: {
	                text: '大盘选座出票量',
	                style: {
	                    color: '#4572A7'
	                }
	            }
	        }],
	        tooltip: {
	            shared: true
	        },
	        series: [{
	            name: '大盘选座出票量',
	            color: '#4572A7',
	            type: 'column',
	            yAxis: 1,
	            data: count,
	            tooltip: {
	                valueSuffix: ''
	            }

	        },{
	            name: '选座线上化率%',
	            color: '#89A54E',
	            type: 'spline',
	            data: ratio,
	            tooltip: {
	                valueSuffix: '%'
	            }
	        }]
	    });
	},
	"incomeMovie":function(x,my,dp,myratio,dpratio){
		$('#ichart5').highcharts({
	        chart: {
	            zoomType: 'xy'
	        },
	        title: {
	            text: '电影收入&佣金率'
	        },
	        xAxis: [{
	            categories: x
	        }],
	        yAxis: [{ // Primary yAxis
	            labels: {
	                format: '{value}%',
	                style: {
	                    color: '#89A54E'
	                }
	            },
	            title: {
	                text: '百分比%',
	                style: {
	                    color: '#89A54E'
	                }
	            },
	            opposite: true
	        }, { // Secondary yAxis
	            title: {
	                text: '选座收入',
	                style: {
	                    color: '#4572A7'
	                }
	            },
	            labels: {
	                format: '{value}',
	                style: {
	                    color: '#4572A7'
	                }
	            }
	        }],
	        tooltip: {
	            shared: true
	        },
	        plotOptions: {
	            column: {
	                stacking: 'normal',
	                dataLabels: {
	                    enabled: true,
	                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
	                }
	            }
	        },
	        series: [{
	            name: '猫眼选座收入',
	            color: '#C0C0C0',
	            type: 'column',
	            yAxis: 1,
	            data: my,
	            tooltip: {
	                valueSuffix: ''
	            }

	        },{
	            name: '点评选座收入',
	            color: '#89A54E',
	            type: 'column',
	            yAxis: 1,
	            data: dp,
	            tooltip: {
	                valueSuffix: ''
	            }

	        }, {
	            name: '猫眼选座佣金率',
	            color: '#C0C0C0',
	            type: 'spline',
	            data: myratio,
	            tooltip: {
	                valueSuffix: '%'
	            }
	        }, {
	            name: '点评选座佣金率',
	            color: '#89A54E',
	            type: 'spline',
	            data: dpratio,
	            tooltip: {
	                valueSuffix: '%'
	            }
	        }]
	    });
	},"incomeProduct":function(x,my,dp,myratio,dpratio){
		$('#ichart6').highcharts({
	        chart: {
	            zoomType: 'xy'
	        },
	        title: {
	            text: '卖品收入&佣金率'
	        },
	        xAxis: [{
	            categories: x
	        }],
	        yAxis: [{ // Primary yAxis
	            labels: {
	                format: '{value}%',
	                style: {
	                    color: '#89A54E'
	                }
	            },
	            title: {
	                text: '百分比%',
	                style: {
	                    color: '#89A54E'
	                }
	            },
	            opposite: true
	        }, { // Secondary yAxis
	            title: {
	                text: '卖品收入',
	                style: {
	                    color: '#4572A7'
	                }
	            },
	            labels: {
	                format: '{value}',
	                style: {
	                    color: '#4572A7'
	                }
	            }
	        }],
	        tooltip: {
	            shared: true
	        },
	        plotOptions: {
	            column: {
	                stacking: 'normal',
	                dataLabels: {
	                    enabled: true,
	                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
	                }
	            }
	        },
	        series: [{
	            name: '猫眼卖品收入',
	            color: '#C0C0C0',
	            type: 'column',
	            yAxis: 1,
	            data: my,
	            tooltip: {
	                valueSuffix: ''
	            }

	        },{
	            name: '点评卖品收入',
	            color: '#89A54E',
	            type: 'column',
	            yAxis: 1,
	            data: dp,
	            tooltip: {
	                valueSuffix: ''
	            }

	        }, {
	            name: '猫眼卖品佣金率',
	            color: '#C0C0C0',
	            type: 'spline',
	            data: myratio,
	            tooltip: {
	                valueSuffix: '%'
	            }
	        }, {
	            name: '点评卖品佣金率',
	            color: '#89A54E',
	            type: 'spline',
	            data: dpratio,
	            tooltip: {
	                valueSuffix: '%'
	            }
	        }]
	    });
	},"ratioSeat":function(x,total,my,dp){
		 $('#ichart7').highcharts({
		        title: {
		            text: '选作市占%',
		            x: -20 //center
		        },
		        xAxis: {
		            categories: x
		        },
		        yAxis: {
		            title: {
		                text: '市占率%'
		            },
		            plotLines: [{
		                value: 0,
		                width: 1,
		                color: '#808080'
		            }]
		        },
		        tooltip: {
		            valueSuffix: '%'
		        },
		        series: [{
		            name: '整体市占',
		            data: total
		        }, {
		            name: '猫眼选座市占',
		            data: my
		        }, {
		            name: '点评选座市占',
		            data: dp
		        }]
		    });
	},"costSeat":function(x,my,dp,myratio,dpratio){
		$('#ichart8').highcharts({
	        chart: {
	            zoomType: 'xy'
	        },
	        title: {
	            text: '电影选作总成本&补贴比例'
	        },
	        xAxis: [{
	            categories: x
	        }],
	        yAxis: [{ // Primary yAxis
	            labels: {
	                format: '{value}%',
	                style: {
	                    color: '#89A54E'
	                }
	            },
	            title: {
	                text: '百分比%',
	                style: {
	                    color: '#89A54E'
	                }
	            },
	            opposite: true
	        }, { // Secondary yAxis
	            title: {
	                text: '总成本',
	                style: {
	                    color: '#4572A7'
	                }
	            },
	            labels: {
	                format: '{value}',
	                style: {
	                    color: '#4572A7'
	                }
	            }
	        }],
	        tooltip: {
	            shared: true
	        },
	        plotOptions: {
	            column: {
	                stacking: 'normal',
	                dataLabels: {
	                    enabled: true,
	                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
	                }
	            }
	        },
	        series: [{
	            name: '猫眼选座总成本',
	            color: '#00FF00',
	            type: 'column',
	            yAxis: 1,
	            data: my,
	            tooltip: {
	                valueSuffix: ''
	            }

	        },{
	            name: '点评选座总成本',
	            color: '#C0C0C0',
	            type: 'column',
	            yAxis: 1,
	            data: dp,
	            tooltip: {
	                valueSuffix: ''
	            }

	        }, {
	            name: '猫眼选座补贴比例',
	            color: '#89A54E',
	            type: 'spline',
	            data: myratio,
	            tooltip: {
	                valueSuffix: '%'
	            }
	        }, {
	            name: '点评选座补贴比例',
	            color: '#0000FF',
	            type: 'spline',
	            data: dpratio,
	            tooltip: {
	                valueSuffix: '%'
	            }
	        }]
	    });
	},"ratioProduct":function(x,my,dp){
		$('#ichart9').highcharts({
	        title: {
	            text: '卖品订单转化率%',
	            x: -20 //center
	        },
	        xAxis: {
	            categories: x
	        },
	        yAxis: {
	            title: {
	                text: '转化率%'
	            },
	            plotLines: [{
	                value: 0,
	                width: 1,
	                color: '#808080'
	            }]
	        },
	        tooltip: {
	            valueSuffix: '%'
	        },
	        series: [{
	            name: '猫眼卖品订单转化率',
	            data: my
	        }, {
	            name: '点评卖品订单转化率',
	            data: dp
	        }]
	    });
	},
	"init":function(){
		this.gmvTotal(0,0,0);
		this.gmvSeat();
		this.gmvProduct();
		this.ticketTotal();
		this.incomeMovie();
		this.incomeProduct();
		this.ratioSeat();
		this.costSeat();
		this.ratioProduct();
	}
}
$(function () {
	$.post("./hdata", function(data){
		   chart.gmvTotal(data.dt,data.gmvTotal,data.gmvRatio);
		   chart.gmvSeat(data.dt,data.gmvSeatDp,data.gmvSeatMy);
		   chart.gmvProduct(data.dt,data.productdp,data.productmy);
		   chart.ticketTotal(data.dt,data.ticketTotal,data.ticketRatio);
		   chart.incomeMovie(data.dt,data.incomeMy,data.incomeDp,data.incomeRatioMy,data.incomeRatioDp);
		   chart.incomeProduct(data.dt,data.incomepromy,data.incomeprodp,data.incomeratiopromy,data.incomeratioprodp);
		   chart.ratioSeat(data.dt,data.ratioTotal,data.ratioMy,data.ratioDp);
		   chart.costSeat(data.dt,data.costMy,data.costDp,data.costRatioMy,data.costRatioDp);
		   chart.ratioProduct(data.dt,data.ratiodealmy,data.ratiodealdp);
	},"json");
});