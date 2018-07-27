$(function () {

    // 1渲染导航
    $.ajax({
        url: 'http:127.0.0.1:9090/api/getbaicaijiatitle',
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $('.baicia_nav .mui-scroll').html(template('tpl', info));
        }
    })
    // 2渲染白菜价商品列表
    var titleid=getsearch().titleid;
    if(!titleid){
        titleid=0;
    }
    $.ajax({
        url: 'http:127.0.0.1:9090/api/getbaicaijiaproduct',
        data: {
            titleid: titleid
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $('.container').html(template('tpl2',info));
        }
    })

    // 监听tap事件，解决 a标签 不能跳转页面问题
    mui('body').on('tap','a',function(){
        document.location.href=this.href;
    });


    // 默认样式
    mui('.mui-scroll-wrapper').scroll({
        indicators: false
    });
    //获取地址栏中的值
    function getsearch() {
        var result = location.search;
        //解析成中文
        result = decodeURI(result);
        //slice意思从什么位置截取
        result = result.slice(1);

        //对字符串进行分割('&')
        var arr = result.split('&');
        //对每个数组里面的对象分割('=')
        //定义一个新的对象接收地址栏的值
        var obj = {};
        arr.forEach(function (item) {
            var k = item.split('=')[0];
            var v = item.split('=')[1];
            obj[k] = v;
        })

        return obj;


    }
    //1. 点击按钮会到顶部
    //https://www.cnblogs.com/xiaobaiyang/articles/5507924.html
    var scrollToTopBox = document.getElementById('scrollToTop');
    //返回按钮tap
    scrollToTopBox.addEventListener('tap', function (e) {
        e.stopPropagation();
        mui('.mui-scroll-wrapper-copy').pullRefresh().scrollTo(0, 0, 1000);//滚动到顶部
        window.scrollTo(0, 1000);
    })







})