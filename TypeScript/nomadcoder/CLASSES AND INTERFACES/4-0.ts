abstract class User {
    constructor(
        private firstname: string,
        private lastname: string,
        public nickname: string
    ) { }

    getFullName() {
        return `${this.firstname} ${this.lastname}`
    }
}

class Player4_0 extends User {

}

const jo4_0 = new Player4_0("조", "윤혁", "Aierse")

console.log(jo4_0.nickname)
console.log(jo4_0.getFullName)