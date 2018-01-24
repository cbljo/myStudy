$(document).ready(function () {
    function checkTime() {
        var time = $('#time').text();
        var arr = time.split(':');
        var min = arr[0];
        var sec = arr[1];
        if(parseInt(sec)>0){
            sec = parseInt(sec)-1;
            if(sec<10){
                sec = '0'+sec;
            }
        }
        else if(parseInt(min)>0){
            sec = '59'
            min = parseInt(min)-1
            if(min<10){
                min = '0'+min
            }
        }
        else{
            clearInterval(chec)
        }
        $('#time').text(min + ':' + sec)
    }
    var chec;
    $('#start').click(function () {
        if(chec){
            clearInterval(chec)
            chec = null
        }
        else{
            chec = setInterval(checkTime,1000);
        }
    });
    var breakTime = 5;
    var sessionTime = 25;
    $('#bt1').click(function () {
        var a = $('#n1').text();
        if(parseInt(a)>0){
            $('#n1').text(parseInt(a)-1);
            breakTime -=1;
        }
    })
    $('#bt2').click(function () {
        var a = $('#n1').text();
            $('#n1').text(parseInt(a)+1);
            breakTime +=1
    })
    $('#bt3').click(function () {
        var a = $('#n2').text();
        if(parseInt(a)>0){
            $('#n2').text(parseInt(a)-1);
            sessionTime -=1
            clearInterval(chec)
            chec=null
            $('#time').text(sessionTime + ':' + '00')
        }
    })
    $('#bt4').click(function () {
        var a = $('#n2').text();
        $('#n2').text(parseInt(a)+1);
        sessionTime+=1
        clearInterval(chec)
        chec=null
        $('#time').text(sessionTime + ':' + '00')
    })
    $('#reset').click(function () {
        sessionTime =25
        breakTime =5
        clearInterval(chec)
        chec=null
        $('#time').text(sessionTime + ':' + '00')
        $('#n2').text(25);
        $('#n1').text(5);
    })

})