import React from 'react';
import Comment from './Comment';

const comments = [
  {
    id: 1,
    name: '신현우',
    comment: '리액트 댓글 컴포넌트 만들기 너무 쉬워요! 성공~',
  },
  {
    id: 2,
    name: '유재석',
    comment: '리액트 너무 재미있당 ㅎㅎ',
  },
  {
    id: 3,
    name: '김태현',
    comment: '개발자가 되고싶어요...',
  },
];

export default function CommentList() {
  return (
    <div>
      {comments.map((comment) => {
        console.log(comment);
        return (
          <Comment
            // key, name, comment라는 attribute들이 props라는 자바스크립트 객체형태로 컴포넌트인 Comment로 전달되어 데이터의 값을 사용할 수 있게 한다.
            key={comment.id}
            name={comment.name}
            comment={comment.comment}
          />
        );
      })}
    </div>
  );
}

// map 함수를 통해 컴포넌트에 데이터를 적용하기

// map은 comments라는 배열의 모든 요소를 순환하면서 id, name, comment의 값을 컴포넌트인 Comment의 props의 값으로 넘겨 전달한다.
// 전달한 props의 값을 컴포넌트에 할당하여 렌더링하여 출력된 결과를 볼 수 있다.

// map을 사용하면 key라는 고유한 값이 필요하다는 에러가 발생한다.
// 이는 map 함수를 사용하면 "key"란 고유한 값이 필요한데 이를 map의 콜백함수의 2번째 매개변수인 index를 사용해도 되지만 리액트에서는 데이터의 혼동을 막기 위해 index를 key값으로 사용하는 것을 지양하고 있다.
// 그래서 데이터에 고유한 id값을 추가하여 컴포넌트의 key의 값으로 할당해주면 에러가 발생하지 않는다.
