$(document).ready(function () {
    var pb = $('.pb');
    function ini() {
        for(var i=0;i<pb.length;i++){
            pb.eq(i).removeClass('cross');
            pb.eq(i).removeClass('circle')
        }
    }
    var overAllStat = [[null,null,null],[null,null,null],[null,null,null]]
    var status = 0;
    var turn = 0;
    $('#cr').click(function () {
        ini();
        status = 0;
    });
    $('#ci').click(function () {
        ini();
        status = 1;
    });
    function checkStatus() {
        if($('#pb1').hasClass('cross')==1 && $('#pb2').hasClass('cross')==1 && $('#pb3').hasClass('cross')==1){
            alert('cross win')
            ini();
        }
        if($('#pb1').hasClass('circle')==1 && $('#pb2').hasClass('circle')==1 && $('#pb3').hasClass('circle')==1){
            alert('circle win')
            ini();
        }
        if($('#pb4').hasClass('cross')==1 && $('#pb5').hasClass('cross')==1 && $('#pb6').hasClass('cross')==1){
            alert('cross win')
            ini();
        }
        if($('#pb4').hasClass('circle')==1 && $('#pb5').hasClass('circle')==1 && $('#pb6').hasClass('circle')==1){
            alert('circle win')
            ini();
        }
        if($('#pb7').hasClass('cross')==1 && $('#pb8').hasClass('cross')==1 && $('#pb9').hasClass('cross')==1){
            alert('cross win')
            ini();
        }
        if($('#pb7').hasClass('circle')==1 && $('#pb8').hasClass('circle')==1 && $('#pb9').hasClass('circle')==1){
            alert('circle win')
            ini();
        }
        if($('#pb1').hasClass('cross')==1 && $('#pb5').hasClass('cross')==1 && $('#pb9').hasClass('cross')==1){
            alert('cross win')
            ini();
        }
        if($('#pb1').hasClass('circle')==1 && $('#pb5').hasClass('circle')==1 && $('#pb9').hasClass('circle')==1){
            alert('circle win')
            ini();
        }
        if($('#pb3').hasClass('cross')==1 && $('#pb5').hasClass('cross')==1 && $('#pb7').hasClass('cross')==1){
            alert('cross win')
            ini();
        }
        if($('#pb3').hasClass('circle')==1 && $('#pb5').hasClass('circle')==1 && $('#pb7').hasClass('circle')==1){
            alert('circle win')
            ini();
        }
        if($('#pb1').hasClass('cross')==1 && $('#pb4').hasClass('cross')==1 && $('#pb7').hasClass('cross')==1){
            alert('cross win')
            ini();
        }
        if($('#pb1').hasClass('circle')==1 && $('#pb4').hasClass('circle')==1 && $('#pb7').hasClass('circle')==1){
            alert('circle win')
            ini();
        }
        if($('#pb2').hasClass('cross')==1 && $('#pb5').hasClass('cross')==1 && $('#pb8').hasClass('cross')==1){
            alert('cross win')
            ini();
        }
        if($('#pb5').hasClass('circle')==1 && $('#pb2').hasClass('circle')==1 && $('#pb8').hasClass('circle')==1){
            alert('circle win')
            ini();
        }
        if($('#pb6').hasClass('cross')==1 && $('#pb9').hasClass('cross')==1 && $('#pb3').hasClass('cross')==1){
            alert('cross win')
            ini();
        }
        if($('#pb6').hasClass('circle')==1 && $('#pb9').hasClass('circle')==1 && $('#pb3').hasClass('circle')==1){
            alert('circle win')
            ini();
        }
    }
    function computerMove() {

    }
    for(var j=0;j<pb.length;j++){
        pb.eq(j).click(function () {
            this.index = j
            alert(this.index)
            if(status == 0 && $(this).hasClass('cross')==0 && $(this).hasClass('circle')==0){
                $(this).addClass('cross');
                status = 1;
                checkStatus()
            }
            else if(status == 1 && $(this).hasClass('cross')==0 && $(this).hasClass('circle')==0){
                $(this).addClass('circle');
                status = 0
                checkStatus()
            }

        })
    }
});