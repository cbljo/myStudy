$(document).ready(function () {
    var outPut = $('#result1');
    $('.number').click(function () {
        var a = this.innerText;
        var b = outPut.text();
        if(outPut.text() == 0){
            outPut.text(a)
        }
        else{
            outPut.text(b.toString()+a)
        }
    });
    var funct = false;
    $('.func').click(function () {
        var a = this.innerText;
        var b = outPut.text();
        if(!funct){
            outPut.text(b.toString()+a);
            funct = true;
        }
        else{
            var c = eval(b);
            outPut.text(c+a);
            funct = true
        }
    });
    $('.cal').click(function () {
        var b = outPut.text();
        outPut.text(eval(b));
        funct = false;
    });
    $('.point').click(function () {
        var b = outPut.text();
        var regu = RegExp(/[0-9]/);
        var str = b.toString()
        if(regu.test(str[str.length-1])){
            outPut.text(b+'.')
        }
    })
    var reset = false;
    var or = ''
    $('.reset').click(function () {
        or = eval(outPut.text());
        outPut.text('0')
        reset = true
    })
    $('.answer').click(function () {
        if(reset){
            outPut.text(or)
        }
    })
    $('.ce').click(function () {
        if(outPut.text().length>1){
            outPut.text(outPut.text().slice(0,outPut.text().length-1))
        }
        else{
            outPut.text('0')
        }
    })
    $('.perc').click(function () {
        var b = outPut.text()
        if(parseFloat(b) == b){
            outPut.text(b/100)
            funct = true
        }
    })
})