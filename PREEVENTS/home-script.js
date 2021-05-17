$(document).ready(function() {
  $(".background").animate({opacity: 1});
  // Fades the intro text in.
  $(".container, #preeventsTitle").animate({opacity: 1}, 1500);
  $(".container, #researchSupported").delay(400).animate({opacity: 1}, 1500);
  $(".container, #conductedBy").delay(800).animate({opacity: 1}, 1500);

  // Fades the buttons in.
  $(".container, .buttonsRowOne, .abstractButton").delay(2300).animate({opacity: 1}, 200);
  $(".container, .buttonsRowOne, .collaboratorsButton").delay(2500).animate({opacity: 1}, 200);
  $(".container, .buttonsRowOne, .publicationsButton").delay(2700).animate({opacity: 1}, 200);
  $(".container, .buttonsRowOne, .talksButton").delay(2900).animate({opacity: 1}, 200);
  $(".container, .buttonsRowOne, .visualizationsButton").delay(3100).animate({opacity: 1}, 200);
});