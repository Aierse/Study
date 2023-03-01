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
