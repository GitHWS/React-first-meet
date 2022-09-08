import { useState, useEffect } from 'react';

function UseStateUseEffect() {
  const [count, setCount] = useState(0);

  // componentDidMount()와 componentDidUpdate()와 비슷하게 작동한다.
  useEffect(() => {
    // 브라우저 API를 사용하여 document의 title을 업데이트한다.
    // 의존성 배열없이 사용했기 때문에 리액트는 DOM이 변경된 이후에 해당 Effect Function을 실행하라는 의미로 받아드린다.
    // 그래서 기본적으로 컴포넌트가 처음 렌더링될때를 포함하여 매번 재렌더링될때마다 실행된다.
    document.title = `You clicked ${count} times`;
    console.log('useEffect 실행');
  });

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log('setCount 함수 실행');
        }}
      >
        클릭
      </button>
    </div>
  );
}

export default UseStateUseEffect;
