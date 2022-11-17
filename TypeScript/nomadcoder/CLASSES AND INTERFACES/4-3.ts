abstract class User4_3 {
    constructor(
        protected firstname: string,
        protected lastname: string
    ) { }

    abstract sayHi(name: string): string
    abstract fullName(): string
}