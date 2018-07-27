$(function(){

    //1 一级菜单-京东
    //1.1 给渲染到的一级菜单第一个注册点击事件;
    $('.cities>ul').on('tap','li:first-child',function(){
        
        $.ajax({
            url: 'http:localhost:9090/api/getgsshop',
            dataType: 'json',
            success: function(info){
                console.log(info);
                $('.cities_list>ul').html(template('tpl',info));
                $('.cities_list>ul').toggleClass('hidden');
                //3.给二级菜单列表注册点击事件
                $('.cities_list>ul').on('tap','li',function(){
                    var shopid = $(this).data('shopid');
                    $(this).find('span').addClass('mui-icon-checkmarkempty');
                    $(this).siblings().find('span').removeClass('mui-icon-checkmarkempty');
                    console.log(shopid);
                    render(0,shopid);
                })

                    
            }
        })
        
    });
    //1.2  给渲染到的一级菜单第一个注册点击事件
    $('.cities>ul').on('tap','li:nth-child(2)',function(){
        $.ajax({
            url: 'http:127.0.0.1:9090/api/getgsshoparea',
            dataType: 'json',
            success: function(info){
                console.log(info);
                $('.cities_list>ul').html(template('tpl2',info));
                $('.cities_list>ul').toggleClass('hidden');
                //3.给二级菜单列表注册点击事件
                $('.cities_list>ul').on('tap','li',function(){
                    var areaid = $(this).data('areaid');
                    
                    render(areaid,0);
                })
                    
            }
        })
        
    });

    //2.凑单品列表
    render();
    function render(areaid,shopid){
        
        $.ajax({
            url: 'http:127.0.0.1:9090/api/getgsproduct',
            data: {
                areaid: areaid||0,
                shopid: shopid||0
            },
            dataType: 'json',
            success: function(info){
                console.log(info);
                $('.container').html(template('tpl3',info));
            }
        })
    }

})