# TypeScript
타입스크립트는 자바스크립트에 타입을 부여한 언어다. 따라서 자바스크립트에서 확장된 언어라고 볼 수 있다.  
브라우저는 타입스크립트를 이해할 수 없기 때문에 자바스크립트와 달리 브라우저에서 실행하려면 파일을 컴파일해주어야 한다.  
컴파일을 거치면 결과물로 자바스크립트 파일이 생성된다.
## 폴더 및 파일

### package-lock.json
npm을 사용해서 package.json 파일 또는 node_modules 트리를 수정하면 자동으로 생성되는 파일  
package-lock.json과 package.json이 함께 존재할 경우 package-lock.json을 기준으로 라이브러리를 설치한다.

#### package.json과 package-lock.json의 차이
package.json에 적혀있는 버전은 특정 버전이 아니라 버전의 범위(version range)를 의미한다.  
예를 들어 ^16.9.0 버전에서 ^은 npm install <package> 명령어의 기본 설정으로 이후 버전을 허용한다는 의미이다. 따라서 package.json 파일로 npm install을 할 때 16.9.0이 아닌 16.9.1 버전이 설치될 수 있다.  
대부분의 경우 문제가 없지만 간혹 업데이트된 버전이 오류를 발생시킬 수 있다.
package-lock.json 파일은 파일이 작성된 시점의 의존성 트리를 가지고 있어서 이 파일의 버전을 보고 npm install을 할 수 있도록 하게 한다.  

### pakage.json
프로젝트에 관한 정보와 패키지 매니저(npm, yarn)을 통해 설치한 모듈들의 의존성을 관리하는 파일
#### 옵션
<details>
        <summary>옵션 리스트</summary>
* name
        - 프로젝트 이름으로, 가장 중요하다. 중앙 저장소에 배포할 때 version과 함께 필수 항목이다.
        - url로 사용되고, 설치할 때 디렉토리 이름이 되기 때문에 url이나 디렉터리에서 쓸 수 없는 이름을 사용하면 안 된다.
        - 또한, 이름에 node나 js가 들어가면 안 된다.
        - name은 214자보다 짧아야 하며, 점(.)이나 밑줄(_)로 시작할 수 없다.
        - 대문자를 포함해서는 안 되며, require() 함수의 인수로 사용되며 짧고 알기 쉬운 것으로 짓는 것이 좋다.
* version
* * 프로젝트 버전을 정의힌다. 3단계 버전을 사용하며, - 로 태그 이름을 적을 수 있다.
* description
* * 프로젝트 설명으로, 문자열로 기술한다.
* * npm search로 검색된 리스트에 표시되기 때문에 사람들이 패키지를 찾아내고 이해하는 데 도움이 된다.
* keywords
* * 프로젝트를 검색할 때 참조되는 키워드이다.
* * description과 마찬가지로 npm search로 검색된 리스트에 표시된다.
* homepage
* * 프로젝트 홈페이지 주소이다.
* * url 항목과는 다르며, url을 설정하면 예상치 못한 움직임을 하게 되므로 주의한다.
* author
* * 프로젝트 작성자 정보로, 한 사람만을 지정한다. JSON 형식으로 name, email, url 옵션을 포함한다.
* contributors
* * 프로젝트에 참여한 공헌자 정보로, 여러 사람을 배열로 지정할 수 있다.
* repository
* * 프로젝트의 소스 코드를 저장한 저장소의 정보이다.
* * 소스 코드에 참여하고자 하는 사람들에게 도움이 될 수 있다. 프로젝트의 홈페이지 url을 명시해서는 안 된다.
* scripts
* * 프로젝트에서 자주 실행해야 하는 명령어를 scripts로 작성해두면 npm 명령어로 실행 가능하다.
</details>
### tsconfig.json
타입스크립트 컴파일러 옵션 설정 파일
#### 자주 사용되는 옵션
<details>
        <summary>"compilerOptions"</summary>
* target : 
* module : 
* outDir : 컴파일 결과물을 저장하는 폴더 "./dist" 가 자주 사용된다.
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
