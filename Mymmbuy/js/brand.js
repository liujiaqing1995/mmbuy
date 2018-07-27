$(function () {
    
    // 1.渲染哪个品牌好
    var brandtitleid = getsearch().brandtitleid;
    $.ajax({
        url: 'http:127.0.0.1:9090/api/getbrand',
        data: {
            brandtitleid: brandtitleid
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $('.which_brand .mui-table-view').html(template('tpl', info));
        }
    });
    //2. 渲染销量排行
    $.ajax({
        url: 'http:127.0.0.1:9090/api/getbrandproductlist',
        data: {
            brandtitleid: brandtitleid,
            pagesize: 4
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $('.sales .mui-table-view').html(template('tpl2', info));
            if(info.result.length==0){
                return;
            }
            var productid = info.result[0].productId;
            var productimg = info.result[0].productImg;
            var productname = info.result[0].productName;
            //3 最新评论
            $.ajax({
                url: 'http:127.0.0.1:9090/api/getproductcom',
                data: {
                    productid: productid
                },
                dataType: 'json',
                success: function (info) {
                    console.log(info);
                    $('.news .mui-table-view').html(template('tpl3', info));
                    $('.news .mui-table-view .mui-media-object').html(productimg);
                    $('.news .mui-table-view .mui-media-body').html(productname);
                }
            })
            
        }
    });
    
  

})