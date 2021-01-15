
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
btnIna.addEventListener('click', function () {
    if (this.style.borderStyle === 'inset') {
      this.style.background = '#9510AC';
      $(this).css('border-style', 'outset');
    }
    else {
      this.style.background = '#590A68';
      $(this).css('border-style', 'inset');
    }
  });

var btnAme = document.querySelector('#ameButton');
btnAme.addEventListener('click', function () {
    if (this.style.borderStyle === 'inset') {
      this.style.background = '#EAB15F';
      $(this).css('border-style', 'outset');
    }
    else {
      this.style.background = '#B9854B';
      $(this).css('border-style', 'inset');
    }
  });
