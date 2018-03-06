$(document).ready(function () {
    var color = $('.color');
    var arr = new Array();
    var arr2 = new Array();
    var num = 0;
    function randomPush() {
        num = Math.floor(Math.random()*4);
        arr2.push(num);
        color.eq(num).addClass('selected');
        var t = setTimeout(color.eq(num).removeClass('selected'),1000)
        clearTimeout(t)
    }
    var count = 2;
    var repeat = 5;
    var timer = setInterval(function() {
        if (repeat == 0) {
            clearInterval(timer);
            alert(arr2)
        } else {
            repeat--;
            randomPush();
            alert(repeat)
        }
    }, 3000);

    function check() {
        if(arr.length == arr2.length){
            alert(arr)
            alert(arr2)
        }
    }
    for(var i=0;i<4;i++){
        color[i].index = i;
        color.eq(i).click(function () {
            arr.push(this.index);
            check()
        });
    }



})