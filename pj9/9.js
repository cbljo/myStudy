$(document).ready(function () {
    var pb = $('.pb');
    function ini() {
        for(var i=0;i<pb.length;i++){
            pb.eq(i).removeClass('cross');
            pb.eq(i).removeClass('circle')
        }
    }
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
    for(var j=0;j<pb.length;j++){
        pb.eq(j).click(function () {
            if(status == 0 && $(this).hasClass('cross')==0 && $(this).hasClass('circle')==0){
                $(this).addClass('cross');
                status = 1
            }
            else if(status == 1 && $(this).hasClass('cross')==0 && $(this).hasClass('circle')==0){
                $(this).addClass('circle');
                status = 0
            }

        })
    }
});