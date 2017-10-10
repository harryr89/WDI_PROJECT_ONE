// 1) pick random div
// 2) add spot on selected div
// 3) after time, remove spot from div

// 4) when li is selected, add click event to it
// 4) when li is not selected, remove click event from it




// once dom has been fully loaded, execute the setup function.
$(setup);
  console.log('1');
let $lis;
  console.log('2');
function setup() {
  console.log('3');
  $lis = $('li');
  console.log('4');

console.log('pickRandomSquare');  pickRandomSquare(console.log('argument'));
  console.log('5');
}

function pickRandomSquare() {
  console.log('6');
  let selectedSquare = $lis[Math.floor(Math.random()*$lis.length)];
  // test (console.log('called hello'));
  console.log('7');
  console.log('8 addSpotToSelectedSquare'); addSpotToSelectedSquare(selectedSquare);
  console.log('8');
}

function addSpotToSelectedSquare(square) {
  console.log('9');
  $(square).addClass('selected').on('click', function(){
  console.log('10');

//begin another interation point to pickRandomSquare

  });

  // click


  setTimeout(function() {
    console.log('11');
    $(square).removeClass("selected");
    console.log('12');

    //called for a loop
    console.log('called addSpotToLoop');  addSpotToSelectedSquare();

    //reduce timer by 100 every five iterations. pass add spot to selectedSquare

  }, 3000 /* ($(square) - 100)*/);
    console.log('13');
  //take X iteration of square and reudce by reduction const
}

//test function
function test (){
  console.log('hello');
}
