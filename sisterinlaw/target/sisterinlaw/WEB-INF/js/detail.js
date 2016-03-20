$(function () {
    var url = window.location.href;
    var pid = url.split('=')[1];
    getDetail(pid);

});
function getDetail(pid) {
    var data = { "name": "name", "brand": "brand", "guige": "guige", "price": "name" };
 
$('#name').html(data.name);
$('#brand').html(data.brand);
$('#guige').html(data.guige);
$('#price').html(data.price); 
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


