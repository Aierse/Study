interface User4_3 {
    firstname: string,
    lastname: string

    sayHi(name: string): string
    fullName(): string
}

interface Human {
    health: number
}

class Player4_3 implements User4_3, Human {
    constructor(
        public firstname: string,
        public lastname: string,
        public health: number
    ) { }
    fullName(): string {
        return `${this.firstname} ${this.lastname}`
    }

    sayHi(name: string): string {
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}

function makeUser(user: User4_3): User4_3 {
    return {
        firstname: "nico",
        lastname: "las",
        fullName: () => "xx",
        sayHi: (name) => "string"
    }
}

makeUser({
    firstname: "nico",
    lastname: "las",
    fullName: () => "xx",
    sayHi: (name) => "string"
})