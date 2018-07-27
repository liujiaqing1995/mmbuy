$(function(){

 

    //2. 菜单导航动态渲染
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getindexmenu',
        dataType: 'json',
        success: function(info){
            console.log(info);
            $('.mmbuy_nav ul').html( template('tpl',info) );
            $('.mmbuy_nav li:nth-of-type(n+9)').addClass('hidden');
        }
    });

    //3. 折扣商品动态渲染
    $.ajax({
        url: 'http:127.0.0.1:9090/api/getmoneyctrl',
        dataType: 'json',
        success: function(info){
            console.log(info);
            $('.mmbuy_cheap .mui-table-view').html( template('tpl2',info) );
            
        }
    });

    //4. 点击更多显示
    $('.mmbuy_nav ul').on('tap','li:nth-of-type(8)',function(){
        $('.mmbuy_nav li:nth-of-type(n+9)').toggleClass('hidden');
    })

})