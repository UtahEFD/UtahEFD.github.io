function cycleBackgroundImages() {
  $.backstretch([
    "https://github.com/UtahEFD/UtahEFD.github.io/blob/main/PREEVENTS/Images/University-of-MN-Duluth-Campus-min-min.jpg?raw=true",
    "https://github.com/UtahEFD/UtahEFD.github.io/blob/main/PREEVENTS/Images/University-of-Utah-Campus-min-min.jpg?raw=true",
    ], {
      fade: 750,
      duration: 3000
  });
}

$(document).ready(function() {
  cycleBackgroundImages();

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