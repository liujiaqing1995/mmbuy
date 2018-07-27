$(function(){

    //1. 发送ajax请求渲染页面
    var id = getsearch().productid||26;
    console.log(id);
    $.ajax({
        url: 'http:127.0.0.1:9090/api/getdiscountproduct',
        data: {
            productid: id
        },
        dataType: 'json',
        success: function(info){
            console.log(info);
            $('.container').html(template('tpl',info));
        }
    })

})