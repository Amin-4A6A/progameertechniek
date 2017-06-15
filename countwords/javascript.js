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
function hoofdletter() {
    var str = document.getElementById('text').value;
    var res = str.toUpperCase();
    document.getElementById("demo").innerHTML = res;
}
