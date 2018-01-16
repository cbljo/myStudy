$(document).ready(function () {
    var randomColor = function () {
        return Math.floor(Math.random()*50+150)
    };
    var body = $('body');
    $('#b3').on('click',function () {
        var cor = 'rgb('+randomColor()+','+randomColor()+','+randomColor()+')';
        body.css('color',cor);
        body.css('background',cor )
        $('.btn').css('background',cor)
        $.getJSON("json/4.json",function (json) {
            var a = [];
            for (var key in json){
                a.push(key)
            }
            var randnum = Math.floor(Math.random()*a.length)
            $('#sent').text(json[a[randnum]])
            $('#aut').text(a[randnum])
        })

    })

});