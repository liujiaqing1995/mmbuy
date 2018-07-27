$(function(){
    // 优惠卷种类的渲染
    $.ajax({
        url: 'http:127.0.0.1:9090/api/getcoupon',
        dataType: 'json',
        success: function(info){
            console.log(info);
            $('.coupon_sort ul').html(template('tpl',info))
        }
    })
})