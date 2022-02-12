/* global $, document, window, $ */

//Canvas Setup
const canvas = document.getElementById('exam'),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particaleArray = [];
const numperOfParteciles = 50;

//get Mouse Position
const mouse = {
    x: null,
    y:null
}

window.addEventListener(('mousemove'), function(event) {
    
    mouse.x = event.x;
    mouse.y = event.y;
    
    //console.log(mouse.x, mouse.y);
    
});

setInterval(function(){
    mouse.x = undefined;
    mouse.y = undefined;
}, 200);

//Creat Particiles
class Particle{
    
    constructor(x, y, size, color, weight){
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.weight = weight;
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y,this.size, 0, Math.PI*2, false);
        ctx.strokeStyle = this.color;
        ctx.stroke();
    }
    Update(){
       this.size -= .5;
        if(this.size < 0){
            this.x = (mouse.x + ((Math.random() * 20) - 10));//-10 to 10
            this.y = (mouse.y + ((Math.random() * 20) - 10));
            this.size = (Math.random() * 20) + 12;
            this.weight = (Math.random() * 2) - .5;
        }
        this.y += this.weight;
        this.weight += .2;
        
        if(this.y > canvas.height - this.size){
            this.weight *= -1;
        };
    }
}

function init(){
    particaleArray = [];
    for(let i = 0; i < numperOfParteciles; i++){
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let size = (Math.random() * 5) + 2; //2 to 7
        let weight = 1;
        let color = '#fff';
        particaleArray.push(new Particle(x, y, size, color, weight));
        
    }
}

function animte(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i=0; i < particaleArray.length; i++){
        particaleArray[i].Update();
        particaleArray[i].draw();
    }
    requestAnimationFrame(animte);
}

init();
animte();

var menuBtn = document.getElementById('menuBtn'),
    
    sideNav = document.getElementById('sideNav');

menuBtn.onclick = function () {
  
    'use strict';
    
    if (sideNav.style.right == '-200px') {
            
        sideNav.style.right = '0px';
        
        menuBtn.style.right = '250px';
        
        } else {
            
            sideNav.style.right = '-200px';
            
            menuBtn.style.right = '50px';
        }
};


$('.textarea').on('input', function() {
   
    'use strict';
    
    $('.num').text(150 - $(this).val().length);
    
    if ($('.num').text() < 0) {
        
        $('.num').css('color', 'red');
        
    } else {
        
        $('.num').css('color', 'black');
        
    }

});

/*let progrees = document.getElementById('prgreespar'),
    totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
    
    let progreesHeight = (window.pageYOffset / totalHeight) * 100;
    
    progrees.style.height = progreesHeight + "%";
    
}*/