$(document).ready(function () {
    var color = $('.color');
    var arr = new Array();
    var arr2 = new Array();
    var num = 0;
    function randomPush() {
        num = Math.floor(Math.random()*4);
        arr2.push(num);
        color.eq(num).addClass('selected');
        console.log(color.eq(num))
        //setTimeout(color.eq(num).removeClass('selected'),1000)
    }
    function sleep(numberMillis) {
        var now = new Date();
        var exitTime = now.getTime() + numberMillis;
        while (true) {
            now = new Date();
            if (now.getTime() > exitTime)
                return;
        }
    }
    var count = 2;
    var repeat = 5;
    var timer = setInterval(function() {
        if (repeat == 0) {
            clearInterval(timer);
            console.log(arr2)
        } else {
            for(var i=0;i<color.length;i++){
                color.eq(i).removeClass('selected')
            }

            repeat--;
            setTimeout(randomPush(),1000);
            console.log(repeat)
        }
    }, 2e000);
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