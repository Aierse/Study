abstract class User {
    constructor(
        protected firstname: string,
        protected lastname: string,
        protected nickname: string
    ) { }

    abstract getNickName(): void

    get fullName():string {
        return `${this.firstname}${this.lastname}`
    }
}

class Player4_0 extends User {
    getNickName(): void {
        console.log(this.nickname)
    }
}

const jo4_0 = new Player4_0("조", "윤혁", "Aierse")

console.log(jo4_0.fullName)
console.log(jo4_0.getNickName())
console.log(jo4_0.fullname)