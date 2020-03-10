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

    lettersWrong : [],

    lettersCorrect : [" ", "-"],

    setDisplayWord : function () {
        display = []
        for(var i = 0; i < this.word.length; i++) {
            if(this.lettersCorrect.includes(this.word[i])) {
                display.push(this.word[i]);
            } else {
                display.push("_");
            }
        this.displayWord = display
        document.getElementById("htmlWord").innerHTML = this.displayWord;
        }
    },

    setRandomWord: function() {
        if(this.word === "") {
            this.word = this.words[Math.floor(Math.random() * this.words.length)];
            this.randomWordArray();
            this.setDisplayWord();
            // document.getElementById("htmlWord").innerHTML = this.displayWord;
            //document.getElementById("htmlWord").innerHTML = this.word;
            document.getElementById("letters").innerHTML = this.lettersWrong;
            document.getElementById("guesses").innerHTML = this.guesses;
        }
    },

    randomWordArray: function() {
        arr = this.word.split("");
        this.wordArray.push(arr)
    },

    guessLetter: function(letter) {
        // if letter in 'word' and not in 'lettersCorrect' >
        if(this.word.includes(letter) && !this.lettersCorrect.includes(letter)) {
            this.lettersCorrect.push(letter)
            this.setDisplayWord()
            console.log("guess correct")
            //update display, letterscorrect
        } else if (this.word.includes(letter) && this.lettersCorrect.includes(letter)) {
            console.log(this.lettersCorrect)
            console.log("letter already correct")
        } else {
            if(!this.lettersWrong.includes(letter)) {
                console.log("wrong letter")
                this.lettersWrong.push(letter)
                document.getElementById("letters").innerHTML = this.lettersWrong;
                document.getElementById("guesses").innerHTML = this.guesses -= 1;
            }
        }
    }
};

hangman.setRandomWord();

console.log(hangman.word);
console.log(hangman.wordArray);


// User Input
document.onkeyup = function(event) {
    var userInput = event.key;
    //console.log(userInput)

    // If key is in word and not in guessed or correct letters then expose letter
        // function
    // If key is not in word and not in guessed letters then lower count and add too guessed letters

    hangman.guessLetter(userInput)
}
