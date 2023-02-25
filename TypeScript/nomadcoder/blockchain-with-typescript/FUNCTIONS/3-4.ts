type Player3_4<E> = {
    name: string
    extraInfo: E
}

type NicoExtra = {
    favFood: string
}

type NicoPlayer = Player3_4<NicoExtra>

const nico: NicoPlayer = {
    name: "nico",
    extraInfo: {
        favFood: "kimchi"
    }
}

const lynn: Player3_4<null> = {
    name: "lynn",
    extraInfo: null
}

console.log(nico.extraInfo.favFood)
console.log(lynn.extraInfo)