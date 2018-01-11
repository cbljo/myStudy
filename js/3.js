$(document).ready(function () {

    var submit = document.getElementById('b1');
    var del = document.getElementById('b2');
    var danmuArray = new Array();
    var main = document.getElementById('main');
    danmuArray.push();
    submit.onclick = function(){
        var inputValue = document.getElementById('text').value;
        if (inputValue == false){
            alert('请输入您想要发射的弹幕')
        }
        else{
            danmuArray.push(inputValue)
        }
        launchDanmu()
    };
    launchDanmu = function () {
        var randomIndex = Math.floor(Math.random()*danmuArray.length);
        var newDiv = document.createElement('div');
        newDiv.setAttribute('class','transClass')
        newDiv.innerText = danmuArray[randomIndex];
        main.appendChild(newDiv);
    };

})