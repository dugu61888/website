$(function () {

    var url = window.location.href;
    var pid = url.split('=')[1];
    showpic();
   // showqa();
});











function showpic() { 

    var  urls='./';
 
    $.ajax({
        type: "get",
        url: urls+"getProductJson",
        dataType: "json",//返回值类型
        success: function (data) {
           
                    //  成功的在这里  
                    //查询到的信息去拼 详情页面
                    var str = '';
                    var j=0;
                    for (var i = 0; i < data.length; i++) {
                    	
						//两个一组
						if(j==0)
						{
							 str+=' <div style="width: 960px; height: 200px; overflow: hidden;margin-bottom:12px">';
							  str += '<div style="float:left;width: 470px;margin-right:2px">' 
					str += '<a href="javascript:void(0)" onclick="toDetail('+data[i].id+')" target="_blank" >';
                    str += '<img style="display: inline;" src="' +  urls+ data[i].location + '" width="960" height="200"></a></div>';
							 j++;
							 continue;
						}
                   
                   if(j==1)
				   {
					   str+='<div style="float:right;width: 470px;">';
					   str += '<a href="javascript:void(0)" onclick="toDetail('+data[i].id+')" target="_blank" >';
                    str += '<img style="display: inline;" src="' +  urls+ data[i].location + '" width="960" height="200"></a></div>';
					str+='</div>';
					j--;
					 continue;
				   } 
                    //成功 end
                }
				 $('#picwrap').html(str);
            }
        });
    
    
    

    $.ajax({
        type: "get",
        url: urls+"getQuestionsJson",
        dataType: "json",//返回值类型
        success: function (data) {
                    //  成功的在这里  
                    //查询到的信息去拼 详情页面
           var strqa='';
            
                    for (var i = 0; i < data.length; i++) {
                  strqa +='<div ><div class="tithq"><div class="imgn"><img alt="" src="./imgs/tw.png" height="20" width="22">';
                  strqa +='</div><div class="wt"><a>'+data[i].question+'</a></div></div>';
                  strqa += '<div class="tri3h"><div class="tri4h"><div class="tri1">';
                  strqa += '<div class="tithq" style="border-bottom: #eae8e8 1px solid"><div class="cy"> <p style="text-indent: 2em;">' + data[i].answer + '</p></div></div></div>';  
                  strqa +='</div></div></div>';

           }


              $('#qawrap').html(strqa);
              
                    
                    
                    
                    
                 
            

                    //成功 end
               
            }
        });
    
}

function toDetail(pid) {
 var url = 'detail?pid='+pid;
   window.open(url,'_blank');

}









