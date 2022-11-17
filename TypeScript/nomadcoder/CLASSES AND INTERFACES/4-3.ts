interface User4_3 {
    firstname: string,
    lastname: string

    sayHi(name: string): string
    fullName(): string
}

class Player4_3 implements User4_3 {
    constructor(
        public firstname: string,
        public lastname: string
    ) { }
    fullName(): string {
        return `${this.firstname} ${this.lastname}`
    }

    sayHi(name: string): string {
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}