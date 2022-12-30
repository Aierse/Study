# TypeScript

## 폴더 및 파일

### package-lock.json

### pakage.json

### tsconfig.json
타입스크립트 컴파일러 옵션 설정 파일
#### 자주 사용되는 옵션
<details>
        <summary>"compilerOptions"</summary>
* target : 
* module : 
* outDir : 컴파일 결과물을 저장하는 폴더 __"./dist"__ 가 자주 사용된다.
</details>
### node_modules 폴더


## npm
### npm install
패키지 및 확장 프로그램 설치  

#### 옵션
-D : devDependencies 으로 설치


## 환경설정
제일 기본이 되는 환경설정
```
npm init : package.json 작성 | -y옵션 사용시 기본값 작성
npm i typescript : 타입스크립트 설치
touch tsconfig.json : tsconfig.json 생성(빈파일)
```
자주 사용되는 패키지 및 확장 프로그램
```
npm init -y
tsc -init : tsconfig.json 생성(stub 값이 존재)
npm install -D ts-node : Typescript를 node로 바로 실행할 수 있도록 만들어주는 ts-node 설치
npm install @types/node : Javascript 모듈을 사용할 수 있도록 환경 조성
```


## Dictionary
타입스크립트는 type 키워드를 사용하여 딕셔너리를 생성하고 사용한다.
```typescript
type dictionary = { [key: string]: string }
```

익명 타입으로 Dicionary를 적용시킬 수 있다. 만약 익명 타입을 지정해주지 않으면 any 타입이 되어
numberList
**[index]** 위치에서 string형을 인덱스로 사용할 수 없는 오류가 발생한다.
```typescript
const numberList: { [anyKeyword: string]: number } = {
        'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4,
        'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9,
}
// using
console.log(numberList['zero'])
```


## Destructuring(비구조화)[디스트럭쳐링]
변수에 값을 할당을 하면서 구조화되어 있는 객체(Object, Array 등)를 즉각 분리 시켜 변수에 할당해주는 기능
### Array Destructuring
```typescript
const [a, b] = [10, 20] // a = 10, b = 20

// 사용하고 싶은 위치만 할당받고 싶다면 쉼표를 이용해서 생략시킬 수 있다.
const [, b] = [10, 20] // b = 20

// 변수로 할당하고 나머지는 배열로 할당하고 싶다면 전개 연산자와 응용해서 사용할 수 있다.
const [a, b, ...c] = [10, 20, 30, 40, 50] // a = 10, b = 20, c = [30, 40, 50]
```

### Object Destructuring(객체 비구조화)
객체에는 순서가 없고 속성명으로 구분하기 때문에 객체 비구조화에는 변수명과 속성명이 일치해야 한다.
```typescript
const obj = { a: 10, b: 20 }
const { a, b } = obj
// 변수 이름을 바꾸고 싶은 경우 매핑시켜줘야 한다.
const obj = { a: 10, b: 20 }
const { a: a1, b: b1 } = obj // a1 = 10, b1 = 20
```

#### 중첩 객체
객체 속 객체의 속성값도 불러올 수 있다.
```typescript
const user = {
    name: '홍길동',
    age: 24,
    address: {
        country: 'Korea',
        city: 'Seoul'
    }
}
const { name, address: { city } } = user

console.log(name) // 홍길동
console.log(city) // Seoul
```

Example
객체 비구조화를 응용하여 name만 추출하는 예제이다.
```typescript
const users = [
  { name: '홍길동', age: 24 },
  { name: '고길동', age: 30 },
  { name: '이길동', age: 12 },
  { name: '박길동', age: 49 },
]
// 이름만 추출하기
const names = users.map( ( { name } ) => name )
console.log(names) // ["홍길동", "고길동", "이길동", "박길동"]
```
