// Fades the intro text in.
$(document).ready(function() {
    $(".container").animate({opacity: 1}, 1250);
});

// Animates opening the menu.
function openMenu() {
  document.getElementById("mySidenav").style.width = "100%";
}
  
// Animates closing the menu.
function closeMenu() {
  document.getElementById("mySidenav").style.width = "0";
}