
// function handleKeyboardButtonPres(){
// console.log('button pressed');
// }
// // capture keyboard key press
// document.addEventListener('keyup',handleKeyboardButtonPres )

function handlekeyboardKeyUpEvent(event){
  const playerPressed = event.key;
  console.log('player pressed',playerPressed);

  // stop the game if pressed esc
  if(playerPressed ==='Escape'){
    gameOver();
  }

  // get expected to press
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed,expectedAlphabet);
  // check matched or not
  if(playerPressed === expectedAlphabet){
    
    const currentScore = getTExtElementValueById('current-score');
    const updatedScore = currentScore + 1;
    setTextElementValueById('current-score',updatedScore)

    // -------------------------
    // update score:
    // 1.get the current score

    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText)
    // console.log(currentScore);
    // // 2.increase the score by 1 
  
    // // 3. show the updated score
    // currentScoreElement.innerText = newScore;



    // start a new round 
    console.log(expectedAlphabet);
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  }
  else{
    console.log('you missed your life');
     const currentLife = getTExtElementValueById('current-life');
     const updatedLife = currentLife-1;
     setTextElementValueById('current-life',updatedLife);
     if(updatedLife === 0){
       gameOver();
     }

    // -----------------------------------
    // set 1: get the current life number 
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeTExt = currentLifeElement.innerText;   
    // const currentLife = parseInt(currentLifeTExt)
    // // step -2: reduce the life count
    // const newLife = currentLife-1;

    // // step - 3: display the updated life cound
    // currentLifeElement.innerText = newLife;

  }
}
document.addEventListener('keyup',handlekeyboardKeyUpEvent)


function continueGame(){
  // step -1: generate a random alphabet 
   const alphabet = getARandomAlphabet();
   console.log('your random number is ', alphabet);
  //  set randomly generated alphabet to the screen (show it) 
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;
  // set background color
  setBackgroundColorById(alphabet)
}
function play(){
  // hide everything show onlly the playground
  hideElementById('home')
  hideElementById('final-score')
  showElementById('play-ground')
  continueGame();
  // reset score and life
  setTextElementValueById('current-life',5)
  setTextElementValueById('current-score',0)
}

function gameOver(){
  hideElementById('play-ground');
  showElementById('final-score');
  // update final score
  // 1. get the final score 
  const lastScore = getTExtElementValueById('current-score');
  console.log(lastScore);
  setTextElementValueById('last-score',lastScore);
  // 2.  clear the last selected alphabet highlight
  const currentAlphabet = getElementTextById('current-alphabet');
  // console.log(currentAlphabet);
  removeBackgroundColorById(currentAlphabet);
}

 