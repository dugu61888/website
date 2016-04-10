$(function () {

    var url = window.location.href;
    var pid = url.split('=')[1];
    showpic();
   // showqa();
});











function showpic() { 
//    var data = [{ "href": "www.baidu.com", "src": "../imgs/003.jpg" }, { "href": "www.baidu.com", "src": "../imgs/001.jpg" }, { "href": "www.baidu.com", "src": "../imgs/002.jpg" }, { "href": "www.baidu.com", "src": "../imgs/001.jpg" }, { "href": "www.baidu.com", "src": "../imgs/003.jpg"}]; //json对象
//   
//    var str = '';
//     
//    for (var i = 0; i < data.length; i++) {
//    str+=' <div style="width: 960px; height: 200px; background: #FAFAFA;overflow: hidden;">';
//    str += '<a href="' + data[i].href + '" target="" >';
//    str += '<img style="display: inline;" src="' + data[i].src + '" width="960" height="200"></a></div>';
//
//}
// 
//$('#picwrap').html(str);


//var dataqa = [{ "title": "问题题目一", "content": "回答内容一回答内容一回答内容一回答内容一回答内容一" }, { "title": "问题题目一", "content": "回答内容一" }, { "title": "问题题目一", "content": "回答内容一" }, { "title": "问题题目一", "content": "回答内容一" }, { "title": "问题题目一", "content": "回答内容一"}]; //json对象  
//         var strqa='';             
//         for (var i = 0; i < dataqa.length; i++) {
//       strqa +='<div ><div class="tithq"><div class="imgn"><img alt="" src="../imgs/tw.png" height="20" width="22">';
//       strqa +='</div><div class="wt"><a>'+dataqa[i].title+'</a></div></div>';
//       strqa += '<div class="tri3h"><div class="tri4h"><div class="tri1">';
//       strqa += '<div class="tithq" style="border-bottom: #eae8e8 1px solid"><div class="cy"> ' + dataqa[i].content + '</div></div></div>';  
//       strqa +='</div></div></div>';
//
//}
//
//
//   $('#qawrap').html(strqa);
//   
    //return;
    var  urls='http://localhost:8080/sisterinlaw/';
 
    $.ajax({
        type: "get",
        url: urls+"company/getProductJson",
        dataType: "json",//返回值类型
        success: function (data) {
           
                    //  成功的在这里  
                    //查询到的信息去拼 详情页面
                    var str = '';
                    
                    for (var i = 0; i < data.length; i++) {
                    str+=' <div style="width: 960px; height: 200px; background: #FAFAFA;overflow: hidden;">';
                    str += '<a href="javascript:void(0)" onclick="toDetail('+data[i].id+')" target="_blank" >';
                    str += '<img style="display: inline;" src="' +  urls+ data[i].location + '" width="960" height="200"></a></div>';

              
                 
                $('#picwrap').html(str);

                    //成功 end
                }
            }
        });
    
    
    

    $.ajax({
        type: "get",
        url: urls+"company/getQuestionsJson",
        dataType: "json",//返回值类型
        success: function (data) {
                    //  成功的在这里  
                    //查询到的信息去拼 详情页面
           var strqa='';
            
                    for (var i = 0; i < data.length; i++) {
                  strqa +='<div ><div class="tithq"><div class="imgn"><img alt="" src="../imgs/tw.png" height="20" width="22">';
                  strqa +='</div><div class="wt"><a>'+data[i].question+'</a></div></div>';
                  strqa += '<div class="tri3h"><div class="tri4h"><div class="tri1">';
                  strqa += '<div class="tithq" style="border-bottom: #eae8e8 1px solid"><div class="cy"> ' + data[i].answer + '</div></div></div>';  
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









