$(document).ready(function () {
    var butt= $('.class1');
    for(var i = 0 ; i<3 ; i++ ) {
        butt[i].onclick = function () {
            butt.removeClass('navChecked')
            $(this).addClass('navChecked')
        }
    }
    var h1Height = $('#1').offset().top;
    var h2Height = $('#2').offset().top;
    var h3Height = $('#3').offset().top;
    $(window).scroll(function () {
        var thisTop = $(this).scrollTop();
        if(thisTop>h2Height){
            butt.removeClass('navChecked')
            $('#a3').addClass('navChecked')

        }
        else if(thisTop>h1Height){
            butt.removeClass('navChecked')
            $('#a2').addClass('navChecked')

        }
        else {
            butt.removeClass('navChecked')
            $('#a1').addClass('navChecked')
        }
    })

})