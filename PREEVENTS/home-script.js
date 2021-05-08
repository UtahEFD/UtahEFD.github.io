// Fades the intro text in.
$(document).ready(function() {
    $(".container, #preeventsTitle").animate({opacity: 1}, 2000);
    $(".container, #researchSupported").delay(2200).animate({opacity: 1}, 2000);
    $(".container, #conductedBy").delay(4400).animate({opacity: 1}, 2000);
});

function openMenu() {
  document.getElementById("mySidenav").style.width = "100%";
}
  
function closeMenu() {
  document.getElementById("mySidenav").style.width = "0";
}