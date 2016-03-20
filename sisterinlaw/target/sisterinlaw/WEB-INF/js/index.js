$(function () {
    getList();
});

function getList() {
    var data = [{ "pid": "pidpid", "title": "产品名称", "href": "www.baidu.com", "src": "图片地址" }, { "pid": "pidpid", "title": "产品名称", "href": "www.baidu.com", "src": "图片地址" }, { "pid": "pidpid", "title": "产品名称", "href": "www.baidu.com", "src": "图片地址" }, { "pid": "pidpid", "title": "产品名称", "href": "www.baidu.com", "src": "图片地址" }, { "pid": "pidpid", "title": "产品名称", "href": "www.baidu.com", "src": "图片地址" }, { "pid": "pidpid", "title": "产品名称", "href": "www.baidu.com", "src": "图片地址" }, { "pid": "pidpid", "title": "产品名称", "href": "www.baidu.com", "src": "图片地址" }, { "pid": "pidpid", "title": "产品名称", "href": "www.baidu.com", "src": "图片地址" } ];
    var  str='';
    for (var i = 0; i < data.length; i++) {
    str+='<table width="100%" cellpadding="0" cellspacing="0"><tbody><tr align="center">';
        for (var j = 0; j < 5 && i < data.length; j++,i++) {
            str += '<td valign="top" width="20%" height="180"><div class="thumb" onmouseover="this.className=\'thumb thumb_on\';" onmouseout="this.className=\'thumb\';"><a href="javascript:void(0)" onclick="toDetail()"><img src="' + data[i].src + '" alt="' + data[i].title + '" width="100" height="100"></a><div><a href="' + data[i].href + '" title="' + data[i].title + '">' + data[i].title + '</a></div> </div></td>';

            if (i == data.length - 1) {//最后一个   一个的情况要再调
                for (var k = 0; k < (data.length%5); k++) {
                    str += '<td valign="top" width="20%" height="180"></td>';
                }

            }



        }
        str+='</tr></tbody></table>';
    }
                 
              $('#wraptbs').html(str);                      
                                        
                                          
                                        
                                    
                                
                            

    return;
    $.ajax({
        type: "GET",
        url: "test.json",
        data: { username: $("#username").val(), content: $("#content").val() },
        dataType: "json",
        success: function (data) {
            $('#resText').empty();   //清空resText里面的所有内容
            var html = '';
            $.each(data, function (commentIndex, comment) {
                html += '<div class="comment"><h6>' + comment['username']
                                         + ':</h6><p class="para"' + comment['content']
                                         + '</p></div>';
            });
            $('#resText').html(html);
        }
    });

}


function toDetail() {
    window.location.href = 'detail.htm';
}

