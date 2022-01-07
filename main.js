import Functions from './modules/Functions.js';

let circle = document.getElementById('circle');
let hexagon = document.getElementById('hexagon');
let rhomb = document.getElementById('rhomb');
let square = document.getElementById('square');
let semicircle = document.getElementById('semicircle');
let triangle = document.getElementById('triangle');

function translate(object , args) {
    let {x, y} = args;
    object.setAttribute('transform', `translate(${x} ${y}) rotate(${x/100})`);
}

function mainAnimation() {
    let x = window.scrollY;
    let scrollTopPosition = x;
    
    translate(circle, { 
        "x":  x/2 , 
        "y": Functions.cuadratic(x/20)
    });
    translate(hexagon, { 
        "x":  -x/2 , 
        "y": Functions.cuadratic(x/30)
    });
    translate(rhomb, { 
        "x":  x*2 , 
        "y": -Functions.crazy(x/100)
    });
    translate(square, { 
        "x":  -x*3 , 
        "y": -Functions.linear(x)
    });
    translate(semicircle, { 
        "x":  x*2 , 
        "y": -Functions.sin(x/90)*100
    });
    translate(triangle, { 
        "x":  -x*2 , 
        "y": Functions.crazy(x/120)
    });
    
    if(x > 400){
        document.getElementById('title').classList.add('fadeout');
    }else{
        document.getElementById('title').classList.remove('fadeout');
    }

    if (x > 200) {
        document.getElementById('subtitle').classList.add('fadein');
    }else{
        document.getElementById('subtitle').classList.remove('fadein');
    }

    if(x > 600){
        document.getElementById('animator').style.opacity = '0';
    }else{
        document.getElementById('animator').style.opacity = '100';
    }
}


window.onscroll = mainAnimation;
