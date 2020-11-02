function changeClass(){
document.getElementById("alertalert").className = "alert";
}

window.onload = function(){
	  var currentMonth = new Date().getMonth();
	  var currentYear = new Date().getFullYear();
	  var width = document.getElementById('alertalert').offsetWidth;
      if (currentMonth > 11 && currentYear == 2020) {
       document.getElementById("alertalert").style.display = "none";
      }
      if (width < 551) {
      document.getElementById("mobile-version").style.display = "none";
      }
}