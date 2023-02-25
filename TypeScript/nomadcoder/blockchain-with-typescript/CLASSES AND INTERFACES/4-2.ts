type Team = "red" | "blue" | "yellow"
type Health = 1 | 5 | 10

interface Player4_2 {
    nickname: string
    team: Team
    health: Health
}

const nico4_2: Player4_2 = {
    nickname: "nico",
    team: "yellow",
    health: 10
}