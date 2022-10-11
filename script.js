const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar"); 
const close = document.querySelector("#close");

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
        bar.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
        bar.classList.remove('active');
    })
}



let mainImg = document.querySelector('#MainImg');
let smallImg = document.querySelector('.small-img');

