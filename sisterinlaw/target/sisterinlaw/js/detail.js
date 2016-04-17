$(function () { 
    var url = window.location.href;
    var pid = url.split('=')[1];
   
    getDetail(pid);

});
function getDetail(pidstr) {

    var  urls='http://localhost:8080/sisterinlaw/';
    $.ajax({
        type: "post",
        url: urls+"getProductJson",
        dataType: "json",
        data:{ "pid": pidstr},
      
       
        success: function (data) {
        	//alert(11)
        	$('#name').html(data.name);
        	$('#pname2').html(data.name);
        	//$('#brand').html(data.brand);
        	//$('#guige').html(data.guige);
        	//$('#price').html(data.price); 
        	$('#mid_pic').attr('src', urls+data.location);
        	$('#detailIntro').html(data.introduce);
        }
    });

}


