var hangman = {
    words :         [   "Jean-Luc Picard",
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
    randomWord : string,

    setRandomWord : function () {
        var word = this.words[Math.floor(Math.random() * this.words.length)]
        return this.randomWord.push(word)
        },

    randomWordArray : function () {
                        return this.randomWord().split('')
                        }
                    }

console.log(hangman.randomWord())
console.log(hangman.randomWordArray())