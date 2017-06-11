function uitRekenen() {
  var nummer = document.getElementById('numbers').value;
  var split = nummer.split(",");
  var result = "";

  for (i = 0; i < split.length; i++) {
    split[i] = parseFloat(split[i])
  }
    var een = split[0] + split[1];
    console.log(een)

  document.getElementById('result').innerHTML = result;
}
  // console.log(split[i])



//forloop
    //parseFloat()

//forloop
