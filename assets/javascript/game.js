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

    lettersCorrect : [" ", "-", "'"],

    setDisplayWord : function () {
        var display = []
        for(var i = 0; i < this.word.length; i++) {
            if(this.lettersCorrect.includes(this.word[i])) {
                display.push(this.word[i]);
            } else {
                display.push("_");
            }

        this.displayWord = display.join(' ')
        document.getElementById("word").innerHTML = this.displayWord;
        }
    },

    setRandomWord: function() {
        if(this.word === "") {
            this.word = this.words[Math.floor(Math.random() * this.words.length)];
            this.randomWordArray();
            this.setDisplayWord();
            document.getElementById("letters").innerHTML = this.lettersWrong.join(" ").toUpperCase();
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
            // console.log("guess correct")
            // update display, letterscorrect
        } else {
            if(!this.lettersWrong.includes(letter) ) {
                // console.log("wrong letter")
                this.lettersWrong.push(letter)
                document.getElementById("letters").innerHTML = this.lettersWrong.join(" ").toUpperCase();
                document.getElementById("guesses").innerHTML = this.guesses -= 1;
            }
        }
    }
};



// User Input
document.onkeyup = function(event) {
    hangman.setRandomWord();
    console.log(hangman.word);
    // var userInput = event.key;
    hangman.guessLetter(event.key)
}
