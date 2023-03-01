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

## 시작
```
npx create-react-app 프로젝트이름
npm run start
```
