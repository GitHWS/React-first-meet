function MyButton(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    'button',
    { onClick: () => setIsClicked(true) },
    isClicked ? 'Clicked!' : 'Click here!'
  );
}

// ReactDOM의 render함수를 사용하여 React 컴포넌트를 domContainer에 렌더링한다.
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);
