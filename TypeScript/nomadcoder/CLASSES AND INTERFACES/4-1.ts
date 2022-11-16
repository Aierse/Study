type Words = {
    [key: string]: string
}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }

    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def
        }
    }

    def(term: string) {
        return this.words[term]
    }
    // Code Challenge
    remove(term:string) {
        delete this.words[term]
    }
    // update Overload Signature
    update(key: Word): void
    update(term: string, def: string): void

    update(key: string | Word, def?: string): void {
        if (key instanceof Word) {
            this.words[key.term] = key.def
        }
        else if (key === def) {
            this.words[key] = def
        }
    }
}

class Word {
    constructor(
        public term: string,
        public def: string
    ) { }
}

const kimchi4_1 = new Word("kimchi", "한국의 음식")

const dict = new Dict()

dict.add(kimchi4_1)
console.log(dict.def("kimchi"))

dict.update("kimchi", "string overload")
console.log(dict.def('kimchi'))

dict.update(new Word('kimchi', "word overload"))
console.log(dict.def('kimchi'))

dict.remove('kimchi')
console.log(dict.def('kimchi'))