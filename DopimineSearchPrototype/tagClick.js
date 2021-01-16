
function tagClick(btn){
  if (btn.style.borderStyle === 'inset') {
    btn.style.background = 'white';
    (btn).style.borderStyle = 'outset';
  }
  else {
    btn.style.backgroundColor  = 'gray';
    (btn).style.borderStyle = 'inset';
    //change random button to off
    var randTag = document.querySelector('#randTag');
    randTag.style.background = 'white';
    (randTag).style.borderStyle = 'outset';

  }
}

function randOnClick(btn){
  if (btn.style.borderStyle === 'inset') {
    btn.style.background = 'white';
    (btn).style.borderStyle = 'outset';
  }
  else {
    btn.style.backgroundColor  = 'gray';
    (btn).style.borderStyle = 'inset';

  }
}
