type Add3_1 = {
    (a: number, b: number): number
    (a: number, b: number, c: number): number
}

const add3_1: Add3_1 = (a, b, c?: number) => {
    if (c) return a + b + c
    return a + b
}

console.log(add3_1(10, 20))
console.log(add3_1(10, 20, 30))