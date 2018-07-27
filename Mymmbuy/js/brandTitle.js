$(function(){
    // 渲染页面
    $.ajax({
        url: 'http:127.0.0.1:9090/api/getbrandtitle',
        dataType: 'json',
        success: function(info){
            console.log(info);
            $(".main .mui-table-view").html(template('tpl',info));
        }
    })
})