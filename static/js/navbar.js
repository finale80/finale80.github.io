window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $("#logo").addClass("logo-reducedsize");
    $("#navbar-right").addClass("navbar-right-reducedsize");
    $("#avatar").addClass("hidden");
    //document.getElementById("logo").style.height = "25px";
    //document.getElementById("navbar-right").style.height = "35px";
    //document.getElementById("navbar-right").style.lineHeight = "35px";
  } else {
    $("#logo").removeClass("logo-reducedsize");
    $("#navbar-right").removeClass("navbar-right-reducedsize");
    $("#avatar").removeClass("hidden");
    //document.getElementById("logo").style.height = "50px";
    //document.getElementById("navbar-right").style.height = "60px";
    //document.getElementById("navbar-right").style.lineHeight = "60px";
  }
}
