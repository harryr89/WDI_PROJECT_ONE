// 1) pick random div
// 2) add spot on selected div
// 3) after time, remove spot from div

// 4) when li is selected, add click event to it
// 4) when li is not selected, remove click event from it




// once dom has been fully loaded, execute the setup function.
$(setup);

let score = 0;

let lives = 3;
let $lis;
let clickIsSuccessful = false;

function setup() {
  $lis = $('li');
  pickRandomSquare();
}

function pickRandomSquare() {
  let selectedSquare = $lis[Math.floor(Math.random()*$lis.length)];
  addSpotToSelectedSquare(selectedSquare);
}

function addSpotToSelectedSquare(square) {
  //take X iteration of square and reudce by reduction const

  $(square).addClass('selected');

  $('.selected').one('click', function(){
    //begin another interation point to pickRandomSquare
    score++;
    clickIsSuccessful = true;
    console.log(score + 'im the score!');
  });

  setTimeout(function() {


    $(square).removeClass('selected').off('click');

    if (!clickIsSuccessful) {
      lives--;
      console.log(lives + 'im the lives');
      if (lives === 0) {
        console.log('game over');
      }
    } else {
      clickIsSuccessful = false;
    }
    //called for a loop
    pickRandomSquare();
    //reduce timer by 100 every five iterations. pass add spot to selectedSquare
    //let timeReduction = 3000 - $lis++ + 100;
  }, 2000 /* ($(square) - 100)*/);
}

//test function
function test (){

  console.log('hello');

}
