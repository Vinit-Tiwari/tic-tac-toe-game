let  count=0;
let cross=[]
let circle=[]
let r=document.getElementById('result')
function display(i,a){
    let x=document.getElementById(i)
    let l1=x.getElementsByTagName('span')[0];
    let l2=x.getElementsByTagName('span')[1];
    let cir=x.getElementsByTagName('span')[2];

    if(l1.style.display != cir.style.display)
    {

    }
    else{
        if(count%2==0){
            l1.style.display="flex"
            l2.style.display="flex"
            cross.push(a)
        }
        else{
            circle.push(a)
            cir.style.display="flex"
        }

        count++;
        check()
    }
}

function check(){
    if(cross.includes('1') && cross.includes('2') && cross.includes('3')){
        r.innerHTML="Player 1 Wins"
    }
    else if(cross.includes('4') && cross.includes('5') && cross.includes('6')){
        r.innerHTML="Player 1 Wins"
    }
    else if(cross.includes('7') && cross.includes('8') && cross.includes('9')){
        r.innerHTML="Player 1 Wins"
    }
    else if(cross.includes('1') && cross.includes('4') && cross.includes('7')){
        r.innerHTML="Player 1 Wins"
    }
    else if(cross.includes('2') && cross.includes('5') && cross.includes('8')){
        r.innerHTML="Player 1 Wins"
    }
    else if(cross.includes('3') && cross.includes('6') && cross.includes('9')){
        r.innerHTML="Player 1 Wins"
    }
    else if(cross.includes('1') && cross.includes('5') && cross.includes('9')){
        r.innerHTML="Player 1 Wins"
    }
    else if(cross.includes('3') && cross.includes('5') && cross.includes('7')){
        r.innerHTML="Player 1 Wins"
    }

    else if(circle.includes('1') && circle.includes('2') && circle.includes('3')){
        r.innerHTML="Player 2 Wins"
    }
    else if(circle.includes('4') && circle.includes('5') && circle.includes('6')){
        r.innerHTML="Player 2 Wins"
    }
    else if(circle.includes('7') && circle.includes('8') && circle.includes('9')){
        r.innerHTML="Player 2 Wins"
    }
    else if(circle.includes('1') && circle.includes('4') && circle.includes('7')){
        r.innerHTML="Player 2 Wins"
    }
    else if(circle.includes('2') && circle.includes('5') && circle.includes('8')){
        r.innerHTML="Player 2 Wins"
    }
    else if(circle.includes('3') && circle.includes('6') && circle.includes('9')){
        r.innerHTML="Player 2 Wins"
    }
    else if(circle.includes('1') && circle.includes('5') && circle.includes('9')){
        r.innerHTML="Player 2 Wins"
    }
    else if(circle.includes('3') && circle.includes('5') && circle.includes('7')){
        r.innerHTML="Player 2 Wins"
    }

    else if(count==9){
        r.innerHTML="Draw"
    }
}

function restart(){
    window.location.reload();
}