import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js';

var key = '';
var val = '';
var input = '';

export function init(k = 'whoami', v = 'Yingrjimsch') {
  //console.log(whoami());
  figlet.parseFont('Standard', standard);
  key = k;
  val = v;
}

export function changeVal(v) {
  val = v;
}

export function changeKey(k) {
  key = k;
}

export function whoami() {
  return figlet.textSync(val);
}

document.addEventListener('keydown', function (event) {
  input = key.includes(input + event.key) ? input + event.key : '';
  if (key === input) {
    input = '';
    console.log(whoami());
  }
});
