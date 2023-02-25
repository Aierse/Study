type Player = {
    name: string
    age?: number
}

const playerMaker = (name: string): Player => (
    { name }
)
const jo = playerMaker("jo")
jo.age = 25

console.log(jo.age)