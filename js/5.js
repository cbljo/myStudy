$(document).ready(function () {
    var b = '北京'
    var api = 'http://api.avatardata.cn/Weather/Query?key=b101a32b11d74382b8ab1dab6451f270&cityname=' + b;
    $.ajax({
        type:'GET',
        url:api,
        async:true,
        dataType:"jsonp",    //跨域json请求一定是jsonp
        jsonp: "callbackparam",    //跨域请求的参数名，默认是callback
        //jsonpCallback:"successCallback",    //自定义跨域参数值，回调函数名也是一样，默认为jQuery自动生成的字符串
        data:{"query":"civilnews"},    //请求参数

        beforeSend: function() {
        },
        success: function(data) {
                 //请求成功处理，和本地回调完全一样
            alert('ok')
             },

         complete: function() {
           },

         error: function() {
            alert('not ok')
             }
    });
})