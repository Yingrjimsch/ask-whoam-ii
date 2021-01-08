import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js';

(function () {
  figlet.parseFont('Standard', standard);
  var key = 'whoami';
  var val = 'G.N';
  var input = '';

  document.addEventListener('keydown', function (event) {
    input = key.includes(input + event.key) ? input + event.key : '';
    if (key === input) {
      figlet.text(
        whoami(),
        {
          font: 'Standard',
        },
        function (err, data) {
          if (err) {
            console.error('Something went wrong...');
          }
          console.log(data);
          input = '';
        }
      );
    }
  });

  var whoami = function () {
    return val;
  };

  whoami.init = function (k, v) {
    key = k;
    val = v;
  };

  whoami.changeVal = function (v) {
    val = v;
  };

  whoami.changeKey = function (k) {
    key = k;
  };

  whoami.getKey = function (k) {
    return key;
  };
  
  whoami.valueOf = whoami;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = whoami;
  } else if (typeof define === 'function' && define.amd) {
    define(whoami);
  } else if (window) {
    window.whoami = whoami;
  }
})();
