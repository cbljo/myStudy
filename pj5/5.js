$(document).ready(function (data) {
    /*var city = document.getElementById('cityInput');
    var cityCode = '北京';
    if(city.value){
        cityCode = city.value
    }
    //var url = 'https://api.seniverse.com/v3/weather/now.json?location='+cityCode+'&ts=1443079775&ttl=30&uid=wU868F2EBDB&sig=7tipxzj9jtppq3np&callback=showWeather';
    var script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
    window.open(url)
    $.ajax({
        type: "get",
        async: false,
        url: url,
        dataType: "jsonp",
        jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
        jsonpCallback:"?",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
        success: function(json){
            alert('ok');
        },
        error: function(){
            alert('fail');
        }
    });*/
    $.getJSON('5.json',function (data) {
        $('#l1').text('天气： '+data.result.realtime.weather.info)
        $('#l2').text('风力： '+data.result.realtime.wind.power)
        $('#l3').text('风向： '+data.result.realtime.wind.direct)
        $('#l4').text('天气： '+data.result.realtime.weather.info)
        $('#l5').text('时间： '+data.result.realtime.date)
        $('#l6').text('天气： '+data.result.realtime.weather.info)
        $('#l7').text('风力： '+data.result.realtime.wind.power)
        $('#l8').text('风向： '+data.result.realtime.wind.direct)
        $('#l9').text('天气： '+data.result.realtime.weather.info)
        $('#l10').text('时间： '+data.result.realtime.date)
    })

});

