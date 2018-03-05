$(document).ready(function () {
    var color = $('.color');
    var arr = new Array();
    var arr2 = new Array();
    function randomPush() {
        num = Math.floor(Math.random()*4)
        arr2.push(num)
        color.eq(num).addClass('selected');
        function clearCss() {
            color.eq(num).removeClass('selected')
        }
        setTimeout(clearCss,1000);

    }
    var count = 1;
    for (var i =0;i<count;i++){
        setTimeout(randomPush(),1000)
    }
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