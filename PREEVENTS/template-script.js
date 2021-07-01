// Fades the intro text in.
$(document).ready(function() {
  $(".container").animate({opacity: 1}, 1250);
});

// Animates the menu opening.
function openMenu() {
  document.getElementById("menuBar").style.width = "450px";     // Sets the width of the menu on the side.
  document.getElementById("menuBar").style.maxWidth = "100%";   // Prevents the menu from going past the maximum width of the device.
}

// Animates the menu closing.
function closeMenu() {
  document.getElementById("menuBar").style.width = "0";         // Closes the menu.
}

// Author: Eric Nieters - niete018@d.umn.edu