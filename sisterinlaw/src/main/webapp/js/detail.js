$(function () { 
    var url = window.location.href;
    var pid = url.split('=')[1];
   
    getDetail(pid);

});
function getDetail(pidstr) {

    var  urls='./';
    $.ajax({
        type: "post",
        url: urls+"getProductJson",
        dataType: "json",
        data:{ "pid": pidstr},
      
       
        success: function (data) {
        	//alert(11)
        	$('#name').html(data.name);
        	$('#pname2').html(data.name);
        	$('#mid_pic').attr('src', urls+data.location);
        	$('#detailIntro').html(data.introduce);
        }
    });

}


