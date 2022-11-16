class Player4_0 {
    constructor (
        private firstname:string,
        private lastname:string,
        public nickname:string
    ){}
}

const jo4_0 = new Player4_0("조", "윤혁", "Aierse")

console.log(jo4_0.nickname)