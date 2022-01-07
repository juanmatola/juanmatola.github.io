import Functions from './modules/Functions.js';

let circle = document.getElementById('circle');
let hexagon = document.getElementById('hexagon');
let rhomb = document.getElementById('rhomb');
let square = document.getElementById('square');
let semicircle = document.getElementById('semicircle');
let triangle = document.getElementById('triangle');

function translate(object , x, y) {
    object.setAttribute('transform', `translate(${x} ${y})`);
}

window.onscroll = () => {
    let x = window.scrollY;
    translate(circle, x/2, Functions.cuadratic(x/20));
    translate(hexagon, -x/2, Functions.cuadratic(x/30));
    translate(rhomb, x*2, -Functions.crazy(x/100));
    translate(square, -x*3, -Functions.linear(x));
    translate(semicircle, x*2, -Functions.sin(x/90)*100);
    translate(triangle, -x*2, Functions.crazy(x/120));

    if(x > 400){
        document.getElementById('title').classList.add('fadein');
    }else{
        document.getElementById('title').classList.remove('fadein');
    }

    if(x > 600){
        document.getElementById('animator').style.opacity = '0';
    }else{
        document.getElementById('animator').style.opacity = '100';
    }


    console.log(x);
};
