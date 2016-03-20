$(function () {
    getList();
});

function getList() {
    //var data = [{ "pid": "pidpid", "title": "产品名称", "href": "www.baidu.com", "src": "图片地址" }, { "pid": "pidpid", "title": "产品名称", "href": "www.baidu.com", "src": "图片地址" }, { "pid": "pidpid", "title": "产品名称", "href": "www.baidu.com", "src": "图片地址" }, { "pid": "pidpid", "title": "产品名称", "href": "www.baidu.com", "src": "图片地址" }, { "pid": "pidpid", "title": "产品名称", "href": "www.baidu.com", "src": "图片地址" }, { "pid": "pidpid", "title": "产品名称", "href": "www.baidu.com", "src": "图片地址" }, { "pid": "pidpid", "title": "产品名称", "href": "www.baidu.com", "src": "图片地址" }, { "pid": "pidpid", "title": "产品名称", "href": "www.baidu.com", "src": "图片地址" } ];
                     
                                                        

var  urls='http://localhost:8080/sisterinlaw/';
    $.ajax({
        type: "get",
        url: urls+"company/getProductJson",
       // data: { username: $("#username").val() },
        dataType: "json",
        success: function (data) {
        	
        	var  str='';
            for (var i = 0; i < data.length; i++) {
            str+='<table width="100%" cellpadding="0" cellspacing="0"><tbody><tr align="center">';
                for (var j = 0; j < 5 && i < data.length; j++,i++) {
                	
                	
                    str += '<td valign="top" width="20%" height="180"><div class="thumb" onmouseover="this.className=\'thumb thumb_on\';" onmouseout="this.className=\'thumb\';"><a href="javascript:void(0)" onclick="toDetail('+data[i].id+')">';
                   str +='<img src="'+ urls+ data[i].location + '" alt="' + data[i].name + '" width="100" height="100"></a><div><a href="javascript:void(0)" onclick="toDetail('+data[i].id+')" title="' + data[i].name + '">' + data[i].name + '</a></div> </div></td>';

                    if (i == data.length - 1) {//最后一个   一个的情况要再调
                        for (var k = 0; k < (data.length%5); k++) {
                            str += '<td valign="top" width="20%" height="180"></td>';
                        }

                    }
                 

                }
               i--;
                str+='</tr></tbody></table>';
            }
          
                      $('#wraptbs').html(str);     
    
        }
    });

}


function toDetail(pid) {
    window.location.href = 'detail?pid='+pid;
}

