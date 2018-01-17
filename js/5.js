$(document).ready(function () {
    $.getJSON('http://api.avatardata.cn/Weather/Query?key=b101a32b11d74382b8ab1dab6451f270&cityname=北京',function (json) {
        a = json.result.data.weather.info;
        alert(a)
    })
})