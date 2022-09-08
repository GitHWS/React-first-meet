import React, { useState, useEffect } from 'react';
import useCounter from './useCounter';

const MAX_CAPACITY = 10;

export default function Accommodate() {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  // 의존성 배열이 없는 useEffect는 컴포넌트가 마운팅된 직후(컴포넌트가 업데이트 때 포함하여) 실행
  useEffect(() => {
    console.log('==============');
    console.log('useEffect() called');
    console.log(`isFull : ${isFull}`);
  });

  // 의존성 배열이 있는 useEffect는 컴포넌트가 마운팅되 직후 실행되며 의존성 배열의 의존성 변수의 데이터가 변경될 때마다 실행된다.
  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value : ${count}`);
  }, [count]);

  return (
    <div style={{ padding: 16 }}>
      <p>{`총 ${count}명 수용했습니다.`}</p>
      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={decreaseCount}>퇴장</button>

      {isFull && <p style={{ color: 'red' }}>정원이 가득 찼습니다.</p>}
    </div>
  );
}
