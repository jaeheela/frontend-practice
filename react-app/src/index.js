//입구 파일
//npm start를 이용해 creat-react-app을 구동시키면 이 도구는 index.js 파일을 찾아 거기에 적혀있는대로 동작함

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//./App.js 혹은 ./App.css 폴더로부터 App이라는 태그가 옴 - .js 혹은 .css 확장자 생략하여 표시됨
import App from './App';
import reportWebVitals from './reportWebVitals';

//<App> 태그에 id값이 root인 태그로 랜더링해주세요 - id값이 root인 태그는 public/index.html에 존재
//<div id="root">
//  <div class="App">Hello React!</div>
//</div>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
