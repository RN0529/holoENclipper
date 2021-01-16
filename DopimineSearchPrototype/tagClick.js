
function tagClick(btn){
  if (btn.style.borderStyle === 'inset') {
    btn.style.background = '#45C0F1';
    (btn).style.borderStyle = 'outset';
  }
  else {
    btn.style.backgroundColor  = '#37ABEA';
    (btn).style.borderStyle = 'inset';
    //change random button to off
    var randTag = document.querySelector('#randTag');
    randTag.style.background = '#45C0F1';
    (randTag).style.borderStyle = 'outset';

  }
}

function randOnClick(btn){
  if (btn.style.borderStyle === 'inset') {
    btn.style.background = '#45C0F1';
    (btn).style.borderStyle = 'outset';
  }
  else {
    btn.style.backgroundColor  = '#37ABEA';
    (btn).style.borderStyle = 'inset';
    //uncheck other buttons when random is clicked
    unClickOthers();
  }
}

function unClickOthers(){
  var btn1 = document.getElementById('ddBtn');
  btn1.style.background = '#45C0F1';
  (btn1).style.borderStyle = 'outset';

  var btn2= document.getElementById('painBtn');
  btn2.style.background = '#45C0F1';
  (btn2).style.borderStyle = 'outset';

  var btn3= document.getElementById('wholeBtn');
  btn3.style.background = '#45C0F1';
  (btn3).style.borderStyle = 'outset';

  var btn4= document.getElementById('mknBtn');
  btn4.style.background = '#45C0F1';
  (btn4).style.borderStyle = 'outset';

  var btn5= document.getElementById('deskBtn');
  btn5.style.background = '#45C0F1';
  (btn5).style.borderStyle = 'outset';

  var btn6= document.getElementById('sneezeBtn');
  btn6.style.background = '#45C0F1';
  (btn6).style.borderStyle = 'outset';

  var btn7= document.getElementById('BLBtn');
  btn7.style.background = '#45C0F1';
  (btn7).style.borderStyle = 'outset';

  var btn8= document.getElementById('ABtn');
  btn8.style.background = '#45C0F1';
  (btn8).style.borderStyle = 'outset';

}
