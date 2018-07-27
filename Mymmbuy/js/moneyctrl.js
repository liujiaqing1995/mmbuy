$(function(){

    //1. 省钱控商品动态渲染
    //获取页数
    var pageid = getsearch().pageid;
    //标记select个数
    var optnum;
    render(pageid);
    function render(pageid){
        //判断是否传参了
        var obj;
        if(!pageid){
            // console.log('hah');
            pageid=0;
            obj = {};
        }else{
            obj = {
                pageid: pageid
            }
        }
        $.ajax({
            url: 'http:127.0.0.1:9090/api/getmoneyctrl',
            data: obj,
            dataType: 'json',
            success: function(info){
                console.log(info);
                $('.mmbuy_cheap .mui-table-view').html( template('tpl',info) );
                optnum = Math.ceil(info.totalCount/info.pagesize);
                //2.动态渲染option个数
                var info = {
                    pageid: parseInt(pageid)+1,
                    optnum: optnum
                }
                console.log(info);
                $('#page').html(template('tpl2',info));
            }
        });
    }
    

    //3. 点击下一页获取下一页,发送ajax请求
    // 用于标记页数
    $('.next button').on('click',function(){
        // console.log("竟来了");
        var pageid = getsearch().pageid;
        if(!pageid){  
            pageid = 0;
        }
        pageid++;
        
        
        if(pageid == optnum){          
            return;
        }
        location.href = 'moneyctrl.html?pageid='+pageid;
    });

    //4. 点击上一页获取上一页,发送ajax请求
    // 用于标记页数
    $('.prev button').on('click',function(){
        var pageid = getsearch().pageid;
        if(pageid==0 || !pageid){
            return;  
        }
        pageid--;
        location.href = 'moneyctrl.html?pageid='+pageid;
    })

    //5. 给下拉菜单添加点击事件
    $('#page').on('change',function () {
        //拼接字符串的方式  产生一个新的地址
        var id=$(this).val();
        location.href= 'moneyctrl.html?pageid='+(id-1);
    });


})