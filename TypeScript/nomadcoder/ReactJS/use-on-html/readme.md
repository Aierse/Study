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
