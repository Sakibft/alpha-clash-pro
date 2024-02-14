
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
  hideElementById('home')
  showElementById('play-ground')
  continueGame()
}