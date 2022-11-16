type Player = {
    name: string
    age?: number
}

function playerMaker(name: string): Player {
    return {
        name
    }
}

const jo = playerMaker("jo")
jo.age = 25

console.log(jo.age)