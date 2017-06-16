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

function verander(str) {

  return str.replace(/\w\S*/g, function(str) {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
  });
}

function hoofdletter() {
  var str = document.getElementById('text').value;
  var letter = verander(str);
  document.getElementById("demo").innerHTML = letter;
};

function langsteLetter() {
  var str = document.getElementById('text').value;
  var words = str.split(" ");
  var langsteWoord = "";
  var langsteWoordLengte = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > langsteWoordLengte) {
      langsteWoordLengte = words[i].length;
      langsteWoord = words[i];
    }
  }
  document.getElementById("uitkomst").innerHTML = langsteWoord + " en het is: " + langsteWoordLengte + " characters lang.";
};

function vaakVoorkomt(str) {
  var str = document.getElementById('text').value;
  var words = str.split(" ");
  var meestVoorkomende = split.length;
}
