$( ()=> {
console.log('working');
  //declare variables for storing JQuery DOM objects
  const $score = $('#score');
  const $choice1 = $('#choice-1');
  const $choice2 = $('#choice-2');
  const $choice3 = $('#choice-3');
  const $choice4 = $('#choice-4');
  const $choice5 = $('#choice-5');
  const $choice6 = $('#choice-6');
  const $choice7 = $('#choice-7');
  const $choice8 = $('#choice-8');
  const $choice9 = $('#choice-9');
  const $result = $('#result');
  const $reset = $('#reset');

  let playerTurn = 1;

  //function to set event handlers for all cells in grid and the reset button
  function setEventHandlers(){
    $choice1.on('click', Location);
    console.log($choice1);
    $choice2.on('click', Location);
    console.log($choice2);
    $choice3.on('click', Location);
    $choice4.on('click', Location);
    $choice5.on('click', Location);
    $choice6.on('click', Location);
    $choice7.on('click', Location);
    $choice8.on('click', Location);
    $choice9.on('click', Location);

    $reset.on('click', dummy);
  }

  //function to know which cell has been clicked
  function Location(){

    $(this).unbind('click');
    console.log(this);

    if(playerTurn % 2 === 0){
      $(this).text('0');
      playerTurn++;
    }else {
      $(this).text('X');
      playerTurn++;
    }
  }

  //function to initialise the grid
  function initGrid(){
    $choice1.text('');
    $choice2.text('');
    $choice3.text('');
    $choice4.text('');
    $choice5.text('');
    $choice6.text('');
    $choice7.text('');
    $choice8.text('');
    $choice9.text('');
  }


  function dummy(){

  }

  setEventHandlers();
  initGrid();
});
