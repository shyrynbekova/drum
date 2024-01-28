const wordlist = ['Balzhan', 'annoying', 'brown', 'android'];
let selectedWord = '';
let maxAttempts = 10;
let incorrectAttempts = 0;
let usedLetters = [];

function chooseRandomWord(arr){
    const randomIndex = Math.floor(Math.random()*4)+1

    return arr[randomIndex]
}

function fillGuessedWord(length) {
    let result = [];
}




function showInfo() {
    console.log('Слово:' +guessedWord.join(""));
    console.log('Неправильные попытки' +incorrectGuesses + "/" + 
    maxIncorrectGuesses);
    console.log("Использованные буквы: "+usedLetters.join(","));

}

function fillUsedLetters() {

}

function playGame() {
    selectedWord = chooseRandomWord(wordlist);
    guessedWord = fillGuessedWord(selectedWord.length);

    let word = prompt("Угадайте букву"). toLowerCase();
    function checkWord(letter){
        const hasLetter = selectedWord.includes(letter)
        if (hasLetter === true) {
            for (let i = 0; i < selectedWord.length; i++)  {
                if (letter ===selectedWord[i]) {
                    guessedWord[i] = letter;
                }
            }

        } else {
            incorrectGuesses++
        }


    }
  usedLetters.push(letter);
  function 



    console.log(word);
    while(isGameWon === false && isGameLost === false){
        showInfo()

        
    }  
    if (isGameWon ()) {
        console.log("ұттыңыз!")
    }

    if (isGameLost ()) {
        console.log("ұтылдыңыз!")
    }


}
playGame()
