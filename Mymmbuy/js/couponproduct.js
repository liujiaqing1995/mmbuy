$(function () {
    var couponid=getsearch().couponid;
    $.ajax({
        type: 'get',
        url: "http:127.0.0.1:9090/api/getcouponproduct",
        data: {
            couponid: couponid,
        },
        success: function (info) {
            console.log(info);
            $('.coupon_list ul').html(template('tpl', info));
            var imgsrcs=[];
            var lengthMax=info.result.length;
            for(var i = 0;i<lengthMax;i++){
                imgsrcs.push(info.result[i].couponProductImg.split('=')[1].split('"')[1]);  
            }
            console.log(imgsrcs);
            
            //给每个图片注册点击事件
            $('.mui-table-view').on('tap','.mui-media-object img',function(){
                var index = $(this).parent().data('index');
                console.log(index);
                
                $('.ceng').removeClass('hidden');
                $('.ceng img').attr('src',imgsrcs[index]);
                $('.ceng button:first-of-type').on('tap',function(){
                    console.log('上一页');
                    
                    if(index<=0){
                        return;
                    }
                    index--;
                    $('.ceng img').attr('src',imgsrcs[index]);
                    
                });
                $('.ceng button:nth-of-type(2)').on('tap',function(){
                    
                    if(index>=lengthMax-1){
                        return;
                    }
                    console.log('下一页');
                    index++;
                    $('.ceng img').attr('src',imgsrcs[index]);
                });
                $('.ceng img').on('tap',function(){
                    $('.ceng').addClass('hidden');
                });
            });
        }
    });
})