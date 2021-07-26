function cycleBackgroundImages() {
  // If you would like to add a new image to the background, simply add the URL of it to the array below.
  $.backstretch([
    "https://github.com/UtahEFD/UtahEFD.github.io/blob/main/PREEVENTS/Images/UMDDuluthCampus-Background.jpg?raw=true",
    "https://github.com/UtahEFD/UtahEFD.github.io/blob/main/PREEVENTS/Images/UUtahCampus-Background.jpg?raw=true",
    "https://github.com/UtahEFD/UtahEFD.github.io/blob/main/PREEVENTS/Images/UColoradoDenverCampus-Background.jpg?raw=true",
    "https://github.com/UtahEFD/UtahEFD.github.io/blob/main/PREEVENTS/Images/UCaliforniaDavisCampus-Background.jpg?raw=true"
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

// Author: Eric Nieters - niete018@d.umn.edu