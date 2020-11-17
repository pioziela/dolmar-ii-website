var close = document.getElementsByClassName("understand");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.display = "none";
  }
}