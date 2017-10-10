// 1) pick random div
// 2) add spot on selected div
// 3) after time, remove spot from div

// 4) when li is selected, add click event to it
// 4) when li is not selected, remove click event from it




// once dom has been fully loaded, execute the setup function.
$(setup);

let $lis;

function setup() {
  $lis = $('li');
  pickRandomSquare();
}

function pickRandomSquare() {
  let selectedSquare = $lis[Math.floor(Math.random()*$lis.length)];
  addSpotToSelectedSquare(selectedSquare);
}

function addSpotToSelectedSquare(square) {
  $(square).addClass('selected').on('click', function(){



  });
  // click


  setTimeout(function() {
    $(square).removeClass("selected");
    // dont want to click
  }, 1000);
}
