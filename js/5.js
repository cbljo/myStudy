$(document).ready(function (data) {

    var b = '北京';
    var api = 'http://api.avatardata.cn/Weather/Query?key=b101a32b11d74382b8ab1dab6451f270&cityname='+b;
    window.open(api);
    $.ajax({
        type:'get',
        url:api,
        async:false,
        dataType:"jsonp",
        jsonp: "callback",
        jsonpCallback:"success_Callback",
        success: function(data) {
            console.log(data)
                 alert(data);
             },
         error:function () {
             alert('fail')
         }
    });
});

