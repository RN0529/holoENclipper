
// select the button
var  btnGura = document.getElementById('guraButton');
// add a click event listener
btnGura.addEventListener('click', function () {
  if (this.style.borderStyle === 'inset') {
    this.style.background = '#2D9BF0';
    (this).style.borderStyle = 'outset';
  }
  else {
    this.style.background = '#343B86';
    (this).style.borderStyle = 'inset';
    //change random button to off
    var btnRnd2 = document.getElementById('randButton');
    btnRnd2.style.background = 'gray';
    (btnRnd2).style.borderStyle = 'outset';
  }
});

var btnIna = document.getElementById('inaButton');
btnIna.addEventListener('click', function () {
    if (this.style.borderStyle === 'inset') {
      this.style.background = '#9510AC';
      (this).style.borderStyle = 'outset';
    }
    else {
      this.style.background = '#590A68';
      (this).style.borderStyle = 'inset';
      //change random button to off
      var btnRnd2 = document.getElementById('randButton');
      btnRnd2.style.background = 'gray';
      (btnRnd2).style.borderStyle = 'outset';
    }
  });

var btnAme = document.getElementById('ameButton');
btnAme.addEventListener('click', function () {
    if (this.style.borderStyle === 'inset') {
      this.style.background = '#EAB15F';
      (this).style.borderStyle = 'outset';
    }
    else {
      this.style.background = '#B9854B';
      (this).style.borderStyle = 'inset';
      //change random button to off
      var btnRnd2 = document.getElementById('randButton');
      btnRnd2.style.background = 'gray';
      (btnRnd2).style.borderStyle = 'outset';
    }
});


var btnKiara = document.getElementById('kiaraButton');
btnKiara.addEventListener('click', function () {
    if (this.style.borderStyle === 'inset') {
      this.style.background = '#FF9300';
      (this).style.borderStyle = 'outset';
    }
    else {
      this.style.background = '#AC6606';
      (this).style.borderStyle = 'inset';
      //change random button to off
      var btnRnd2 = document.getElementById('randButton');
      btnRnd2.style.background = 'gray';
      (btnRnd2).style.borderStyle = 'outset';
    }
  });


var btnCali = document.getElementById('moriButton');
btnCali.addEventListener('click', function () {
    if (this.style.borderStyle === 'inset') {
      this.style.background = '#000000';
      (this).style.borderStyle = 'outset';
    }
    else {
      this.style.background = '#2F1122';
      (this).style.borderStyle = 'inset';
       //change random button to off
       var btnRnd2 = document.getElementById('randButton');
       btnRnd2.style.background = 'gray';
       (btnRnd2).style.borderStyle = 'outset';
    }
});

var btnRnd = document.getElementById('randButton');
btnRnd.addEventListener('click', function () {
    if (this.style.borderStyle === 'inset') {
      this.style.background = 'gray';
      (this).style.borderStyle = 'outset';
    }
    else {
      this.style.background = 'black';
      $(this).css('border-style', 'inset');

      var btnCali2 = document.getElementById('moriButton');
      btnCali2.style.background = '#000000';
      btnCali2.style.borderStyle = 'outset';


      var btnKiara2 = document.getElementById('kiaraButton');
      btnKiara2.style.background = '#FF9300';
      btnKiara2.style.borderStyle = 'outset';

      var btnAme2 = document.getElementById('ameButton');
      btnAme2.style.background = '#EAB15F';
      (btnAme2).style.borderStyle = 'outset';


      var btnIna2 = document.getElementById('inaButton');
      btnIna2.style.background = '#9510AC';
      (btnIna2).style.borderStyle = 'outset';

      var btnGura2 = document.getElementById('guraButton');
      btnGura2.style.background = '#2D9BF0';
     (btnGura2).style.borderStyle = 'outset';

    }
  });

