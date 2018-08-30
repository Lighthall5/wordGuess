let display = document.querySelector('.display');
let guessQuerySelector = document.querySelector('#character');
let textForm = document.querySelector('.textForm');

var commonWords = [
  "the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he",
  "this", "have", "from", "or", "one", "had", "by", "word", "but", "not",
  "what", "all", "when", "your", "can", "said", "there",
];

// BRUH IM SO CONFUSED!!!!!!!!
var getRandomWord = function(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var randomWord = getRandomWord(commonWords);
console.log('randomWord', randomWord);

textForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var counter = 10;
  var triedCharacters = [];
  var correctCharacters = [];

  var guessWord = guessQuerySelector.value;
  var shorterWordlength = randomWord.length > guessWord.length ? guessWord.length : randomWord.length;

  console.log('guessWord', guessWord);

  for (i = 0; i < shorterWordlength; i++) {
      if (guessWord[i] === randomWord[i]) {
        correctCharacters.push(guessWord[i])
        console.log("correct " + correctCharacters)
      } else {
        triedCharacters.push(guessWord[i])
        console.log("incorrect " + triedCharacters)
      }
  }
  randomWord = getRandomWord(commonWords);
  console.log('randomWord', randomWord);
})