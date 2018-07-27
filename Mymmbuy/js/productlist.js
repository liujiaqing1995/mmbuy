$(function(){

    //1. 动态渲染页面
    var categoryid = getsearch().categoryid;
    var category = getsearch().category;
    var pageid = getsearch().pageid;

    // //定义一个变量.记录共有多少页的商品
    var pageMax;
    // console.log(categoryid,category,pageid);
    //1.1 将上个页面的分类名写入页面里面
    $('.bread_nav .category_name').text(category);
    //1.2 渲染页面
    render(categoryid,pageid);

    //渲染页面的函数
    function render(categoryid,pageid){
        $.ajax({
            url: 'http:127.0.0.1:9090/api/getproductlist',
            data: {
                categoryid: categoryid, 
                pageid: pageid 
            },
            dataType: 'json',
            success: function(info){
                console.log(info);
                $('.mui-table-view').html(template('tpl',info));
                pageMax = Math.ceil(info.totalCount/info.pagesize);
                var info = {
                    pageMax: pageMax,
                    pageid: pageid 
                }
                //2. 下拉菜单的渲染
                $('#page').html(template('tpl2',info));
            }
        });
    };

    //3. 点击下一页进入
    $('.next button').on('click',function(){
        var pageid = getsearch().pageid;
        pageid++
        if(pageid>pageMax){
            return;
        }
        location.href = 'productlist.html?categoryid='+categoryid+'&category='+category+'&pageid='+pageid;
    })

    //4. 点击上一页进入
    $('.prev button').on('click',function(){
        var pageid = getsearch().pageid;
        pageid--;
        if(!pageid){
            return;
        }
        location.href = 'productlist.html?categoryid='+categoryid+'&category='+category+'&pageid='+pageid;
    });

    //5. 点击下拉菜单获取新数据
    $('#page').on('change',function(){
        var pageid = $(this).val();
        location.href = 'productlist.html?categoryid='+categoryid+'&category='+category+'&pageid='+pageid;
    });

    //6. 给每个商品列表注册点击事件跳转页面
    $('.mui-table-view').on('tap','li',function(){
        var  productid = $(this).data('productid');
        location.href = 'bijia.html?productid='+productid;
    });

});