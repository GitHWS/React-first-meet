import React, { useRef } from 'react';

export default function UseRef() {
  const inputElem = useRef(null);
  // console.log(inputElem);

  const onButtonClick = () => {
    // "current" 속성은 마운트된 input element를 가리킴
    console.log(inputElem);
    inputElem.current.focus();
  };

  return (
    <div>
      <input ref={inputElem} type="text"></input>
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}
