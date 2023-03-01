# React
ReactJS 상호작용하는 동적 웹 페이지를 더욱 쉽고 효과적으로 개발하기 위해 만들어진 라이브러리이다.

### React와 React DOM 차이
#### React
React는 컴포넌트와 props, state, context를 관리하며, 이들의 변경 사항을 파악하고 변경 사항 snap shot을 React-DOM에 전달한다.
#### React DOM
eact-DOM은 웹 인터페이스로 웹과 직접적인 연관이 있으며 실제 HTML 요소를 화면에 불러오는 역할을 한다.  
React-DOM은 React로 부터 받은 변경 사항 snap shot과 실제 브라우저 DOM을 비교하며 차이점을 확인 후, 실제 DOM을 조작한다.  
즉, 브라우저 DOM의 조작은 React-DOM이 하게 되며 리액트 컴포넌트의 이전 state와 현재 state를 비교한 뒤, 차이점이 있을 때 업데이트한다.  
![image](https://user-images.githubusercontent.com/68111814/222175967-fd4a8ae4-dcd7-4747-89bd-0a2c77cc2574.png)
## 확장
```js
<script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script> // 리액트의 props의 타입검사를 도와주는 확장
```

## 시작
```js
<body id="root">
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    const root = document.getElementById("root");

    function App() {
      return (
        <div>Hello World!</div>
      );
    }

    ReactDOM.render(<App />, root);
</script>
</html>
```
## useState

## props
props란 부모 컴포넌트에서 자식 컴포넌트에게 데이터를 전달할 때 활용된다.
```js
function Btn(props) {
      return (
        <button onClick={props.changeValue>
          {props.text}
        </button>
      );
    }

function App() {
      const [value, setValue] = React.useState("Save Changes");
      const changeValue = () => setValue("Revert Changes");

      return (
        <div>
          <Btn text={value} changeValue={changeValue} />
          <Btn text="Confirm" big={false} />
        </div>
      );
    }
```
function Btn에서 매개변수로 props를 받는다. App에서 Btn을 사용할 때 속성 값을 나열하면 해당 속성의 이름과 값을 props의 프로퍼티로 받는다. 
### shortcut
props의 응용으로 실무에서 더 자주 사용된다. Destructuring(비구조화)으로 구조분해하여 사용한다.
```js
function Btn({ text, changeValue }) {
      return (
        <button onClick={changeValue}>
          {text}
        </button>
      );
    }

function App() {
      const [value, setValue] = React.useState("Save Changes");
      const changeValue = () => setValue("Revert Changes");

      return (
        <div>
          <Btn text={value} changeValue={changeValue} />
          <Btn text="Confirm" big={false} />
        </div>
      );
    }
```
