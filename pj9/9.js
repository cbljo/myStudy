$(document).ready(function () {
    var pb = $('.pb');
    function ini() {
        for(var i=0;i<pb.length;i++){
            pb.eq(i).removeClass('cross');
            pb.eq(i).removeClass('circle')
        }
        overAllStat = [null,null,null,null,null,null,null,null,null]
    }
    var overAllStat = [null,null,null,null,null,null,null,null,null];
    var mainPart = [];
    var status = 0;
    var turn = 0;
    var iniMove = 4;
    //overAllStat = [1,2,3,4,5,6,7,8,9]
    $('#cr').click(function () {
        ini();
        status = 0;
    });
    $('#ci').click(function () {
        ini();
        status = 1;
    });
    //mainPart[0] = overAllStat.slice(0,3);
    //mainPart[1] = overAllStat.slice(3,6);
    //mainPart[2] = overAllStat.slice(6);
    //alert(mainPart[0])
    function checkStatus(a) {
        mainPart[0] = overAllStat.slice(0,3);
        mainPart[1] = overAllStat.slice(3,6);
        mainPart[2] = overAllStat.slice(6);
        /*if($('#pb1').hasClass('cross')==1 && $('#pb2').hasClass('cross')==1 && $('#pb3').hasClass('cross')==1){
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
        }*/
        var b = a;
        var c = 0;
        while (b>=3){
            b = b-3;
            c = c+1
        }
        if(b==0){
            if (mainPart[c][b] == mainPart[c][b+1] && mainPart[c][b] ==mainPart[c][b+2]){
                if (mainPart[c][b]==0){
                    alert('cross win')
                    ini()
                }
                else if (mainPart[c][b]==1){
                    alert('circle win')
                    ini()
                }
            }
        }
        if(b==1){
            if (mainPart[c][b-1] == mainPart[c][b] && mainPart[c][b+1] ==mainPart[c][b]){
                if (mainPart[c][b]==0){
                    alert('cross win')
                    ini()
                }
                else if (mainPart[c][b]==1){
                    alert('circle win')
                    ini()
                }
            }
        }
        if(b==2){
            if (mainPart[c][b] == mainPart[c][b-1] && mainPart[c][b] ==mainPart[c][b-2]){
                if (mainPart[c][b]==0){
                    alert('cross win')
                    ini()
                }
                else if (mainPart[c][b]==1){
                    alert('circle win')
                    ini()
                }
            }
        }
        if(c==0){
            if (mainPart[c][b] == mainPart[c+1][b] && mainPart[c][b] ==mainPart[c+2][b]){
                if (mainPart[c][b]==0){
                    alert('cross win')
                    ini()
                }
                else if (mainPart[c][b]==1){
                    alert('circle win')
                    ini()
                }
            }
        }
        if(c==1){
            if (mainPart[c][b] == mainPart[c+1][b] && mainPart[c][b] ==mainPart[c-1][b]){
                if (mainPart[c][b]==0){
                    alert('cross win')
                    ini()
                }
                else if (mainPart[c][b]==1){
                    alert('circle win')
                    ini()
                }
            }
        }
        if(c==2){
            if (mainPart[c][b] == mainPart[c-1][b] && mainPart[c][b] ==mainPart[c-2][b]){
                if (mainPart[c][b]==0){
                    alert('cross win')
                    ini()
                }
                else if (mainPart[c][b]==1){
                    alert('circle win')
                    ini()
                }
            }
        }
        if(c==0 && b == 0){
            if(mainPart[c][b] == mainPart[c+1][b+1] && mainPart[c][b] == mainPart[c+2][b+2]){
                if (mainPart[c][b]==0){
                    alert('cross win')
                    ini()
                }
                else if (mainPart[c][b]==1){
                    alert('circle win')
                    ini()
                }
            }
        }
        if(c==1 && b ==1){
            if(mainPart[c][b] == mainPart[c+1][b+1] && mainPart[c][b] == mainPart[c-1][b-1]){
                if (mainPart[c][b]==0){
                    alert('cross win')
                    ini()
                }
                else if (mainPart[c][b]==1){
                    alert('circle win')
                    ini()
                }
            }
        }
        if(c==2 && b == 2){
            if(mainPart[c][b] == mainPart[c-2][b-2] && mainPart[c][b] == mainPart[c-1][b-1]){
                if (mainPart[c][b]==0){
                    alert('cross win')
                    ini()
                }
                else if (mainPart[c][b]==1){
                    alert('circle win')
                    ini()
                }
            }
        }
        if(c==0 && b == 2){
            if(mainPart[c][b] == mainPart[1][1] && mainPart[c][b] == mainPart[2][0]){
                if (mainPart[c][b]==0){
                    alert('cross win')
                    ini()
                }
                else if (mainPart[c][b]==1){
                    alert('circle win')
                    ini()
                }
            }
        }
        if(c==2 && b == 0){
            if(mainPart[c][b] == mainPart[1][1] && mainPart[c][b] == mainPart[0][2]){
                if (mainPart[c][b]==0){
                    alert('cross win')
                    ini()
                }
                else if (mainPart[c][b]==1){
                    alert('circle win')
                    ini()
                }
            }
        }
        /*if(mainPart[c][b]){
            if (overAllStat[a] == overAllStat[a+2])
            alert('cross win')
            ini();
        }*/
        /*if($('#pb1').hasClass('circle')==1 && $('#pb2').hasClass('circle')==1 && $('#pb3').hasClass('circle')==1){
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
        }*/
    }
    function computerMove(a) {
        mainPart[0] = overAllStat.slice(0,3);
        mainPart[1] = overAllStat.slice(3,6);
        mainPart[2] = overAllStat.slice(6);
        var b = a;
        var c = 0;
        while (b>=3){
            b = b-3;
            c = c+1
        }
        if(mainPart[1][1]==null){
            iniMove = 4;
            if(status == 0){
                pb.eq(4).addClass('cross');
                overAllStat[4] = 0;
                status = 1;
                checkStatus(4)
            }
            else if(status == 1){
                pb.eq(4).addClass('circle')
                overAllStat[4] = 0;
                status = 1;
                checkStatus(4)
            }

        }
        else if(c>=1){
        if(mainPart[c-1][b]==null){
            iniMove = (c-1)*3 + b;
            if(status == 0){
                pb.eq((c-1)*3 + b).addClass('cross')
                overAllStat[(c-1)*3 + b] = 0;
                status = 1;
                checkStatus((c-1)*3 + b)
            }
            else if(status == 1){
                pb.eq((c-1)*3 + b).addClass('circle')
                overAllStat[(c-1)*3 + b] = 0;
                status = 1;
                checkStatus((c-1)*3 + b)
            }
        }
        else if(c<2){
            if(mainPart[c-1][b]==null){
                iniMove = (c-1)*3 + b;
                if(status == 0){
                    pb.eq((c-1)*3 + b).addClass('cross')
                    overAllStat[(c-1)*3 + b] = 0;
                    status = 1;
                    checkStatus((c-1)*3 + b)
                }
                else if(status == 1){
                    pb.eq((c-1)*3 + b).addClass('circle')
                    overAllStat[this.index] = 0;
                    status = 1;
                    checkStatus((c-1)*3 + b)
                }
            }
        else if(b>=1 && mainPart[c][b-1]==null){
                iniMove = (c)*3 + b-1;
            if(status == 0){
                pb.eq((c)*3 + b-1).addClass('cross')
                overAllStat[(c)*3 + b-1] = 0;
                status = 1;
                checkStatus((c)*3 + b-1)
            }
            else if(status == 1){
                pb.eq((c)*3 + b-1).addClass('circle')
                overAllStat[(c)*3 + b-1] = 0;
                status = 1;
                checkStatus((c)*3 + b-1)
            }
        }
        else if(b<2 && mainPart[c][b+1]==null){
                iniMove = (c)*3 + b+1;
            if(status == 0){
                pb.eq((c)*3 + b+1).addClass('cross')
                overAllStat[(c)*3 + b+1] = 0;
                status = 1;
                checkStatus((c)*3 + b+1)
            }
            else if(status == 1){
                pb.eq((c)*3 + b+1).addClass('circle')
                overAllStat[(c)*3 + b+1] = 0;
                status = 1;
                checkStatus((c)*3 + b+1)
            }
        }
        else{
                if(mainPart[0][0]==null){
                    iniMove = 0;
                    if(status == 0){
                        pb.eq(0).addClass('cross')
                        overAllStat[0] = 0;
                        status = 1;
                        checkStatus(0)
                    }
                    else if(status == 1){
                        pb.eq(0).addClass('circle')
                        overAllStat[0] = 0;
                        status = 1;
                        checkStatus(0)
                    }
                }
                if(mainPart[2][2]==null){
                    iniMove = 8;
                    if(status == 0){
                        pb.eq(8).addClass('cross')
                        overAllStat[8] = 0;
                        status = 1;
                        checkStatus(8)
                    }
                    else if(status == 1){
                        pb.eq(8).addClass('circle')
                        overAllStat[8] = 0;
                        status = 1;
                        checkStatus(8)
                    }
                }
                if(mainPart[0][2]==null){
                    iniMove = 2;
                    if(status == 0){
                        pb.eq(2).addClass('cross')
                        overAllStat[2] = 0;
                        status = 1;
                        checkStatus(2)
                    }
                    else if(status == 1){
                        pb.eq(2).addClass('circle')
                        overAllStat[2] = 0;
                        status = 1;
                        checkStatus(2)
                    }
                }
                if(mainPart[2][0]==null){
                    iniMove = 6;
                    if(status == 0){
                        pb.eq(6).addClass('cross')
                        overAllStat[6] = 0;
                        status = 1;
                        checkStatus(6)
                    }
                    else if(status == 1){
                        pb.eq(6).addClass('circle')
                        overAllStat[6] = 0;
                        status = 1;
                        checkStatus(6)
                    }
                }
            }
        }
    }}
        for (var j = 0; j < pb.length; j++) {
            pb[j].index = j;
            pb.eq(j).click(function () {
                if (status == 0 && overAllStat[this.index] == null) {
                    $(this).addClass('cross');
                    overAllStat[this.index] = 0;
                    status = 1;
                    checkStatus(this.index)
                }
                else if (status == 1 && overAllStat[this.index] == null) {
                    $(this).addClass('circle');
                    overAllStat[this.index] = 1;
                    status = 0;
                    checkStatus(this.index)
                }

            })
        }
    /*while (overAllStat.indexOf(null)!=-1){

            turn = 0
        }
        else if(turn ==1){
            computerMove(iniMove)
            turn = 0
        }
    }*/

})