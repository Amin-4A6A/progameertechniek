function myFunction() {
    var str = document.getElementById('text').value;
    var n = str.length;
    document.getElementById("letter").innerHTML = n;

    var string = document.getElementById('text').value;
    var split = string.split(" ");
    var result = split.length;

    console.log('result')
    document.getElementById("words").innerHTML = result;
}

function verander(str){

  return str.replace(/\w\S*/g, function(str){
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
  });
}

function hoofdletter(){
var str = document.getElementById('text').value;
 var letter =  verander(str);
  document.getElementById("demo").innerHTML = letter;
};

// eerts split = array
