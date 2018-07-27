$(function(){

    //1. 发送ajax请求
    $.ajax({
        url: 'http:127.0.0.1:9090/api/getcategorytitle',
        dataType: 'json',
        success: function(info){
            console.log(info);
            $('.mui-table-view').html(template('tpl',info));
            $('.mui-navigate-right').on('tap',function(){
                //2. 获取二级菜单
                var titleid = $(this).data('titleid');
                console.log(titleid);
                
                $.ajax({
                    url: 'http:127.0.0.1:9090/api/getcategory',
                    data: {
                        titleid: titleid
                    },
                    dataType: 'json',
                    success: function(info){
                        console.log(info);
                        $('.second').html(template('tpl2',info));
                        
                    }
                })
            })
        }
    })

    //点击二级分类的页面调转到productlist.html页面
    $('.mui-table-view').on('tap','.second li>a',function(){
        console.log('哈哈');
        var category = $(this).text();
        var categoryid = $(this).data('categoryid');
        location.href = 'productlist.html?categoryid='+categoryid+'&category='+category+'&pageid=1';
        
    })

})