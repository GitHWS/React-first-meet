import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './chapter04/Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}, 1000);

// 시계 만들기 설명

// Clock이라는 컴포넌트를 만들고 index.js에 렌더링을 해준다.
// Clock 컴포넌트가 렌더링되면서 화면에 정상적으로 출력이 된다.
// 하지만 setInterval을 통해 1초마다 이미 렌더링된 Clock 컴포넌트가 출력하는 현재 시간을 변경하는 것이 아닌 새로 생성되어 현재 시간이 업데이트된 Clock 컴포넌트가 기존에 렌더링되었던 Clock 컴포넌트 자체를 새로운 컴포넌트로 바꿔치기하는 것이다.
// 첫번째 Clock 컴포넌트 렌더링 => 첫번째 제거 후 두번째 Clock 렌더링 => 두번째 제거 후 세번째 Clock 렌더링 ... 의 과정으로 이해하면 된다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
