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
  console.log('check first');
}

console.log('function pickRandomSquare'); function pickRandomSquare() {
  console.log('selectedSquare'); let selectedSquare = $lis[Math.floor(Math.random()*$lis.length)];
  
  console.log('passing random number to addSpotToSelectedSquare'); addSpotToSelectedSquare(selectedSquare);
  console.log('checked one');
}

console.log('function addSpot'); function addSpotToSelectedSquare(square) {

  console.log('apply blue color'); $(square).addClass('selected').on('click', function(){
  console.log('checked two');

//begin another interation point to pickRandomSquare

  });
  // click

  console.log('function setTimeout'); setTimeout(function() {
    console.log('11');
    $(square).removeClass("selected");
    console.log('12');

    //called for a loop
    console.log('called pickRandomSquare'); pickRandomSquare();

    //reduce timer by 100 every five iterations. pass add spot to selectedSquare

  }, 3000 /* ($(square) - 100)*/);
    console.log('pause');
  //take X iteration of square and reudce by reduction const
}

//test function
console.log('function test'); function test (){
  console.log('hello');
}
