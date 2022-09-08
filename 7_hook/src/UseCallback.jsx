import React, { useState, useCallback } from 'react';

export default function UseCallback() {
  const [count, setCount] = useState(0);

  // 컴포넌트가 마운팅 시에만 함수가 정의된다.
  const handleClick = useCallback((event) => {
    // 클릭 이벤트 처리
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      {/* <ChildComponent handleClick={handleClick} /> */}
    </div>
  );
}
