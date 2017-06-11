function uitRekenen() {
  var nummer = document.getElementById('numbers').value;
  var split = nummer.split(",");
  var operator = document.getElementById('operation').value;
  var result = "";

  for (i = 0; i < split.length; i++) {
    split[i] = parseFloat(split[i])
  }


  document.getElementById('result').innerHTML = result;
}
// function reken() {
//   result = split[0] + split[1];
//   console.log(een)
// }

result = split[0];
    for (var i=1; i < split.length; i++) {
        result = reken(result, split[i], operator);
    }

function reken(operator,nbrOne,nbrTwo) {
      if (operator == '+') {
          result = nbrOne + nbrTwo;
      } else if (operator == '-') {
          result = nbrOne - nbrTwo;
      } else if (operator == '*') {
          result = nbrOne * nbrTwo;
      } else if (operator == '/') {
          result = nbrOne / nbrTwo;
      }
      return result;
  }
  // console.log(split[i])



//forloop
    //parseFloat()

//forloop
