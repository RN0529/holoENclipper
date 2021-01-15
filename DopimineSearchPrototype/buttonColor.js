
// select the button
var  btnGura = document.querySelector('#guraButton');
// add a click event listener
btnGura.addEventListener('click', function () {
  if (this.style.borderStyle === 'inset') {
    this.style.background = '#2D9BF0';
    $(this).css('border-style', 'outset');
  }
  else {
    this.style.background = '#343B86';
    $(this).css('border-style', 'inset');
  }
});


var btnIna = document.querySelector('#inaButton');
var btnAme = document.querySelector('#ameButton');