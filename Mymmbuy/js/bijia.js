$(function(){

    var productid = getsearch().productid;

    //1. 商品详情渲染
    $.ajax({
        url: 'http:127.0.0.1:9090/api/getproduct',
        data: {
            productid: productid
        },
        dataType: 'json',
        success: function(info){
            console.log(info);
            $('.wrap').html(template('tpl',info));
            //渲染面包屑
            $('.product_name').html(info.result[0].productName.split(' ')[0]);
             
        }
    });
    //2. 评论的渲染
    $.ajax({
        url: 'http:127.0.0.1:9090/api/getproductcom',
        data: {
            productid: productid
        },
        dataType: 'json',
        success: function(info){
            console.log(info);
            $('.user_comment').html(template('tpl2',info));
        }
    })

})