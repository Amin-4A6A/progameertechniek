var begin = 0;
function showMore() {
  console.log("show more...");
  if (begin == 100) {
    clearInterval(int);
    document.body.style.backgroundColor = "black";
  }else {
    begin++;
    document.getElementById('cirkel').innerHTML = begin
  }
}

var int = setInterval(showMore, 100);

// clearTimeout(int);
