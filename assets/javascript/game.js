var hangman = {
    words: [
        "Jean-Luc Picard",
        "William Riker",
        "Geordi La Forge",
        "Tasha Yar",
        "Worf",
        "Beverly Crusher",
        "Deanna Troi",
        "Data",
        "Wesley Crusher",
        "Q",
        "Hugh",
        "Guinan",
        "Reginald Barclay",
        "Miles O'Brien",
        "Noonian Soong"
    ],

    word: "",

    displayWord: "",

    wordArray: [],

    guesses : 15,

    lettersGuessed : [],

    letters : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

    letters2 : ["abcdefghijklmnopqrstuvwxyz"],

    setRandomWord: function() {
        if(this.word === "") {
        this.word = this.words[Math.floor(Math.random() * this.words.length)];
        document.getElementById("htmlWord").innerHTML = this.word
            }
        },

    randomWordArray: function() {
        return this.word.split("");
            }
        };

hangman.setRandomWord();

console.log(hangman.word);
console.log(hangman.wordArray);


// User Input
document.onkeyup = function(event) {
    var userInput = event.key;
    console.log(userInput)

    // If key is in word and not in guessed or correct letters then expose letter

    // If key is not in word and not in guessed letters then lower count and add too guessed letters

    if(hangman.word.includes(userInput)) {
        console.log('woot')
    }}
