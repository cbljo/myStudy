$(document).ready(function () {

    var submit = document.getElementById('b1');
    var del = document.getElementById('b2');
    var danmuArray = new Array();
    var main = document.getElementById('main');
    var divN = $('.trasClass');
    danmuArray.push();
    submit.onclick = function(){
        var inputValue = document.getElementById('text').value;
        if (inputValue == false){
            alert('请输入您想要发射的弹幕')
        }
        else{
            danmuArray.push(inputValue)
        }
        start()
    };
    launchDanmu = function () {
        var randomIndex = Math.floor(Math.random()*danmuArray.length);
        var newDiv = document.createElement('div');
        var randomColor=function () {
            return Math.floor(Math.random()*255);
        };
        newDiv.style.color='rgb('+randomColor()+','+randomColor()+','+randomColor()+')';
        newDiv.style.position = 'absolute';
        newDiv.style.marginRight = '-1000px'
        newDiv.style.marginTop = Math.random()*380+'px';
        //newDiv.style.transform = 'translate(0px,'+Math.random()*400+'px)';
        newDiv.style.animation = 'trans '+(Math.random()*5+3)+'s linear';
        newDiv.innerText = danmuArray[randomIndex];
        newDiv.style.overflow = 'hidden';
        main.appendChild(newDiv);
        //removeC = function () {
           // main.removeChild(newDiv)
        //}
        //alert(newDiv.style.marginLeft)
        //setTimeout(removeC(),10000)
        //newDiv.setAttribute('class','transClass');
    };
    /*checkDanmu = function () {
        for(var i in main.children){
            if(parseInt(i.style.marginLeft)<0){
                main.removeChild(i)
            }
        }

    };*/
    function start() {
        var time1 = setInterval('launchDanmu()',3000);
        del.onclick = function(){
            window.clearInterval(time1)
            $('#main').empty()
        }
    }

    //setTimeout(setInterval(setDanmu(),2000),2)

});