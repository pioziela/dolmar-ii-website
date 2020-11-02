var prevScrollpos = window.pageYOffset;
var main_height = document.getElementById('main_height').offsetHeight - 5;
var main_width = document.getElementById('main_height').offsetWidth;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > main_height && main_width > 500)
  {
  document.getElementById("navbar22").style.top = "0";
  document.getElementById("navbar22").style.display = "block";
  }
  else if (main_width > 500)
  {
  document.getElementById("navbar22").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
}