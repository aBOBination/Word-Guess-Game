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

    wordArray: [],

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
        // for loop to check if you have all the letts and win
        }
        this.displayWord = display.join(' ')
        document.getElementById("word").innerHTML = this.displayWord;
        console.log(display)
        if(!display.includes("_")) {
            alert("You Win!!!");
            this.setRandomWord()
            document.getElementById("wins").innerHTML = this.wins += 1;
            this.reset()
        }

    },

    setRandomWord: function() {
        if(this.word === "") {
            this.word = this.words[Math.floor(Math.random() * this.words.length)];
            this.randomWordArray();
            this.setDisplayWord();
            document.getElementById("letters").innerHTML = this.lettersWrong.join(" ").toUpperCase();
            document.getElementById("guesses").innerHTML = this.guesses;
            document.getElementById("wins").innerHTML = this.wins;
        }
    },

    randomWordArray: function() {
        arr = this.word.split("");
        this.wordArray.push(arr)
    },

    guessLetter: function(letter) {
        if(this.word.includes(letter) && !this.lettersCorrect.includes(letter)) {
            this.lettersCorrect.push(letter)
            this.setDisplayWord()

        } else {
            if(!this.lettersWrong.includes(letter) ) {
                this.lettersWrong.push(letter)
                document.getElementById("letters").innerHTML = this.lettersWrong.join(" ").toUpperCase();
                document.getElementById("guesses").innerHTML = this.guesses -= 1;
            }
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
    hangman.guessLetter(event.key.toUpperCase())
}
