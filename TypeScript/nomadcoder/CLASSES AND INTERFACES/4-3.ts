abstract class User4_3 {
    constructor(
        protected firstname: string,
        protected lastname: string
    ) { }

    abstract sayHi(name: string): string
    abstract fullName(): string
}

class Player4_3 extends User4_3 {
    fullName(): string {
        return `${this.firstname} ${this.lastname}`
    }

    sayHi(name: string): string {
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}