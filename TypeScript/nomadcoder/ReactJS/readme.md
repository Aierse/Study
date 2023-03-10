# React
ReactJS 상호작용하는 동적 웹 페이지를 더욱 쉽고 효과적으로 개발하기 위해 만들어진 라이브러리이다.
### React와 React DOM 차이
#### React
React는 컴포넌트와 props, state, context를 관리하며, 이들의 변경 사항을 파악하고 변경 사항 snap shot을 React-DOM에 전달한다.
#### React DOM
React-DOM은 웹 인터페이스로 웹과 직접적인 연관이 있으며 실제 HTML 요소를 화면에 불러오는 역할을 한다.  
React-DOM은 React로 부터 받은 변경 사항 snap shot과 실제 브라우저 DOM을 비교하며 차이점을 확인 후, 실제 DOM을 조작한다.  
즉, 브라우저 DOM의 조작은 React-DOM이 하게 되며 리액트 컴포넌트의 이전 state와 현재 state를 비교한 뒤, 차이점이 있을 때 업데이트한다.  
![image](https://user-images.githubusercontent.com/68111814/222175967-fd4a8ae4-dcd7-4747-89bd-0a2c77cc2574.png)

## 시작
```
npx create-react-app 프로젝트이름
npm run start
```
처음 리액트를 시작하는 경우 함께 생성하는 파일 때문에 리액트를 완전하게 이해하기 어려울 수 있다.  
[간소화된 버전](https://github.com/Aierse/Study/tree/6eb0dafe4233f13172556aa3d785c29b1531a523/TypeScript/nomadcoder/ReactJS/react-for-beginners)은 Welcome Back! 만을 출력하는 버전이다.

## 주요 기능
### useState
```js
const [value, setValue] = useState();
const onClick = () => setValue(prev => prev + 1);
```

useState는 데이터와 데이터를 변경하는 함수를 리턴한다.  
이 때, 중요한 점은 setValue()를 통해 value를 조작한다.  
setValue를 통해서 value를 참조하는 컴포넌트의 값이 자동으로 반영된다.
### useEffect
```js
const [value, setValue] = useState();
const onClick = () => setValue(prev => prev + 1);

useEffect(() => {
  // 작업
  // 클린업 함수
  return () => console.log("컴포넌트 파괴됨")
}, [value]);
```
useEffect는 다른 값이 바뀌어도 렌더링되는 useState대신, 두번째 매개변수(배열)의 변화만 감지하여, 해당 값이 변경되는 경우에만 실행된다.  
다른 값이 수정되어도 렌더링되는 useState와 달리 원하는 대상만 렌더링 시킬 수 있기에 자주 사용된다.

### props
props란 부모 컴포넌트에서 자식 컴포넌트에게 데이터를 전달할 때 활용된다.
```js
function Btn(props) {
      return (
        <button onClick={props.changeValue}>
          {props.text}
        </button>
      );
    }

function App() {
      const [value, setValue] = useState("Save Changes");
      const changeValue = () => setValue("Revert Changes");

      return (
        <div>
          <Btn text={value} changeValue={changeValue} />
          <Btn text="Confirm" big={false} />
        </div>
      );
    }
```
function Btn에서 매개변수로 props를 받는다.  
App에서 Btn 컴포넌트를 사용할 때 넘겨줄 속성 값을 나열하면 해당 속성의 이름과 값을 key & value의 형태로 만든다.  
Btn에서는 props 프로퍼티로 해당 값들을 받는다.
### shortcut
props의 응용으로 Destructuring(비구조화)으로 구조분해하여 사용한다. 결과는 위 코드와 동일하다.  
더 직관적이고, 사용하기 편리해 **shortcut이 실무에서 더 자주 사용된다.**
```js
function Btn({ text, changeValue }) {
      return (
        <button onClick={changeValue}>
          {text}
        </button>
      );
    }

function App() {
      const [value, setValue] = useState("Save Changes");
      const changeValue = () => setValue("Revert Changes");

      return (
        <div>
          <Btn text={value} changeValue={changeValue} />
          <Btn text="Confirm" big={false} />
        </div>
      );
    }
```

## 확장
```
npm i prop-types // 컴포넌트 props의 타입을 검사해주는 확장
```
