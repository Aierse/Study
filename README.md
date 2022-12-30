# TypeScript Study
```
npm init : package.json 작성 | -y옵션 사용시 기본값 작성
tsc -init : tsconfig.json 생성(stub 값이 존재)
npm install ts-node : Typescript를 node로 바로 실행할 수 있도록 만들어주는 ts-node 설치
npm install @types/node : Javascript 모듈을 사용할 수 있도록 환경 조성
```

```
npm init -y 
npm i typescript : 타입스크립트 설치
touch tsconfig.json : tsconfig.json 생성(빈파일)
```

## Dictionary
```typescript
type dictionary = {
    [key: string]: string
}
```
타입스크립트는 type 키워드를 사용하여 딕셔너리를 생성하고 사용해야한다.  
```typescript
const numberList: {
        [anyKeyword: string]: number
    } = {
        'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4,
        'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9,
    }
// using
console.log(numberList['zero'])
```
위의 코드에서 익명 타입으로 Dicionary를 적용시켜주었다. 만약 익명 타입을 지정해주지 않으면 numberList
**[index]** 위치에서 string형을 인덱스로 사용할 수 없다는 오류가 난다.

## Destructuring(비구조화)[디스트럭쳐링]
변수에 값을 할당을 하면서 구조화되어 있는 객체(Object, Array 등)를 즉각 분리 시켜 변수에 할당해주는 기능
```typescript
const [a, b] = [10, 20] // a = 10, b = 20

// 사용하고 싶은 위치만 할당받고 싶다면 쉼표를 이용해서 생략시킬 수 있다. 
const [, b] = [10, 20] // b = 20

// 변수로 할당하고 나머지는 배열로 할당하고 싶다면 전개 연산자와 응용해서 사용할 수 있다
const [a, b, ...c] = [10, 20, 30, 40, 50] // a = 10, b = 20, c = [30, 40, 50]
```

## Object Destructuring

