let btnGura = document.querySelector('#guraButton');
let btnIna = document.querySelector('#inaButton');
let btnAme = document.querySelector('#ameButton');

var x = false;
if(x){
    btnGura.addEventListener('click', ()=> btnGura.style.backgroundColor='#FFFFFF');
    x=false;
}else{
    btnGura.addEventListener('click', ()=> btnGura.style.backgroundColor='#000000');
    x=true;
}

btnIna.addEventListener('click', ()=> btnIna.style.backgroundColor='#000000');
btnAme.addEventListener('click', ()=> btnAme.style.backgroundColor='#000000');