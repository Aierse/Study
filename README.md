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
<span style="color:yellow">노란 글씨입니다.</span>

