var hangman = {

    words: [
        "JEAN-LUC PICARD",
        "WILLIAM RIKER",
        "GEORDI LA FORGE",
        "TASHA YAR",
        "WORF",
        "BEVERLY CRUSHER",
        "DEANNA TROI",
        "DATA",
        "WESLEY CRUSHER",
        "Q",
        "HUGH",
        "GUINAN",
        "REGINALD BARCLAY",
        "MILES O'BRIEN",
        "NOONIAN SOONG"
    ],

    word: "",

    displayWord: "",

    guesses : 15,

    lettersWrong : [],

    lettersCorrect : [" ", "-", "'"],

    wins : 0,

    setDisplayWord : function() {
        var display = []
        for(var i = 0; i < this.word.length; i++) {
            if(this.lettersCorrect.includes(this.word[i].toUpperCase())) {
                display.push(this.word[i].toUpperCase());
            } else {
                display.push("_");
            }
        }
        this.displayWord = display.join(' ')
        document.getElementById("word").innerHTML = this.displayWord;

        if(!display.includes("_")) {
            alert("You Win!!! \nThe word was " + this.word);
            document.getElementById("wins").innerHTML = this.wins++;
            this.reset()
            this.setRandomWord()
        }
    },

    setRandomWord: function() {
        if(this.word === "") {
            this.word = this.words[Math.floor(Math.random() * this.words.length)];
            this.setDisplayWord();
            document.getElementById("guesses").innerHTML = this.guesses;
            document.getElementById("letters").innerHTML = this.lettersWrong;
            document.getElementById("wins").innerHTML = this.wins;
        }
    },

    guessLetter: function(letter) {
        if(this.word.includes(letter) && !this.lettersCorrect.includes(letter)) {
            this.lettersCorrect.push(letter)
            this.setDisplayWord()

        } else if (!this.lettersWrong.includes(letter) && !this.word.includes(letter)){
            this.guesses--
            this.lettersWrong.push(letter)
            document.getElementById("letters").innerHTML = this.lettersWrong.join(" ").toUpperCase();
            document.getElementById("guesses").innerHTML = this.guesses ;
        };
        if(this.guesses === 0) {
            alert("You Lost! \nThe word was " + this.word)
            this.wins = 0
            this.reset()
        }
    },

    reset : function() {
        this.word = "";
        this.guesses = 15;
        this.lettersWrong = [];
        this.lettersCorrect = [" ", "-", "'"];
        this.setRandomWord();
    }
};

hangman.setRandomWord();

document.onkeyup = function(event) {
    if(event.keyCode > 64 && event.keyCode < 91) {
        hangman.guessLetter(event.key.toUpperCase())
    }
}
