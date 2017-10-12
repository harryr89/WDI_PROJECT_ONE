// 1) pick random div
// 2) add spot on selected div
// 3) after time, remove spot from div

// 4) when li is selected, add click event to it
// 4) when li is not selected, remove click event from it




// once dom has been fully loaded, execute the setup function.
$(setup);

let score = 0; //this will increment as the player is advarncing
let time = 2000;
let lives = 3; //if this gets to zero the game will end
let $lis; //the specific ids of each square
let clickIsSuccessful = false;
let $startGameButton;
let $divStartGame;
let $divResetButton;
let $score;
let $lives;

function setup() {
  $lis = $('li');
  $startGameButton = $('button')[0];
  $divStartGame = $('.gameStart');
  $divResetButton = $('#reset');
  $score = $('#score');
  $lives = $('#lives');
  // only run this function when user clicks on START
  $($startGameButton).on('click', () => {
    $divStartGame.css('display', 'none');
    setTimeout(function(){
      pickRandomSquare();
    }, 2000);
  });
}
//provides a random number (selectedSquare) that is passed for a calss to be added
function pickRandomSquare() {
  let selectedSquare = $lis[Math.floor(Math.random()*$lis.length)];
  addSpotToSelectedSquare(selectedSquare);

}
// function updateScore(){
//
// if($('.selected')&& clickIsSuccessful === true)  {
//  score ++
//  console.log('i just scored' + score);
// }
// if (!clickIsSuccessful)  {
//   time -200
//   lives --
//   console.log('i just lost a life' + lives)
//   console.log(time);
// }
// }
//changing the color of the selected square as chosen by by the random function
function addSpotToSelectedSquare(square) {

  $(square).addClass('selected'); //adding the class selected to the random square

  $('.selected').one('click', function(){ //listening for a click and limiting it to one
    score++; //incrementing score if click has been heard
    $($score).html(score);// CHANGE THE HTML OF THE ELEMENT WITH ID OF SCORE
    time -= 20;
    clickIsSuccessful = true;
    console.log(score + 'im the score!');
  });
  //included in addSpotToSelectedSquare
  const startGame = setTimeout(function() {

    $(square).removeClass('selected').off('click'); //removing the past added class

    if (!clickIsSuccessful) { //as the class gets removed, take the result of click listened and act accordingly (we can also write that as (clickIsSuccessful === false))
      lives--; //take away a life, it begins with three
      $($lives).html(lives);// CHANGE THE HTML OF THE ELEMENT WITH ID OF LIVES
      if (lives === 0) { //once they are at zero end the game
        clearTimeout(startGame);
        return;
      }
    } else clickIsSuccessful = false; //if click has been obtained
    pickRandomSquare();
    //called for a loop

  }, time /* ($(square) - 100)*/);
}


//test function
// function test (){
//
//   console.log('hello');
//
// }
