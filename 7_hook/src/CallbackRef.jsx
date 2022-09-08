import React, { useState, useCallback } from 'react';

export default function CallbackRef() {
  const [height, setHeight] = useState(0);

  // useCallback Hook의 2번째 파라미터인 의존성 배열이 빈 배열이므로 컴포넌트가 처음 렌더링(마운트)할 때, 생명주기가 끝났을 때(언마운트)할 때만 함수가 호출된다.
  // 업데이트를 위한 재렌더링 시에는 함수가 호출되지 않는다.
  const measuredRef = useCallback((node) => {
    console.log(node);
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div>
      {/* measuredReff를 참조하여 useCallback의 인자로 전달한다. */}
      <h1 ref={measuredRef}>안녕, 리액트</h1>
      <p>위 헤더의 높이는 {Math.round(height)}px 입니다.</p>
    </div>
  );
}
