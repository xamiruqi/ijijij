function test() {
    var x = 2, y = 4;
    console.log(eval("x + y"));  // Llamada directa, utiliza el ámbito local, el resultado es 6
    var geval = eval;
    console.log(geval("x + y")); // Llamada indirecta, utiliza el ámbito global, através de ReferenceError por que `x` es indefinida
  }

  eval(new String("2 + 2")); // devuelve un objeto String que contiene "2 + 2"
eval("2 + 2");             // devuelve 4

var s = "1234";
var n = parseInt(s);
console.log(n); // 1234

var x2=x1+c;//110.6563.882705014737745 Y DEBERIA DAR 174.53079582519862
x2=parseFloat(x2);
x2=x2.toFixed(2);
var y2=y1+ci;//-63.88 Y DEBERIA DAR 46.76538579572314
y2=parseFloat(y2);
y2=y2.toFixed(2);

escape('abc123');     // "abc123"
escape('äöü');        // "%E4%F6%FC"
escape('ć');          // "%u0107"

unescape("abc123");     // "abc123"
unescape("%E4%F6%FC");  // "äöü"
unescape("%u0107");     // "ć"

isNaN(NaN) //devuelve true
isNaN("string") //devuelve true
isNaN("12") //devuelve false
isNaN(12) //devuelve false



