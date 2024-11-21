import React, { useMemo, useState } from 'react';

//useMemo는 컴포넌트가 다시 렌더링 될때 연산의 재계산을 방지하여 성능을 최적화 하기 위해 사용
//useMemo를 사용하면 불필요한 연산을 피하면서 상태 업데이트를 처리할 수 있음
// 사용용도 : 불필요한 연산을 캐싱하고 싶을 때, 참조 값 비교로 인해 불필요한 렌더링 방지
// 두개의 인수를 받는데 첫번째 인수는 캐싱하고 싶은 계산(함수)
//                     두번째 인수는 해당 계산이 다시 실행될 조건(의존성 배열)

function MemoTest01(props) {

  const [count,setCount] =useState(0);
  const [text,setText] =useState("");
  //useMemo가 없으면 텍스트 입력할때 마다 계산을 해야 한다.
  const expensiveValue = useMemo(()=>{
    console.log("useMemo 처리");
    return count + 1000;
  },[count]);
  return (
    <div>
        <h1>useMemo exam</h1>
        <p> 연산값 : {expensiveValue}</p>
        <p>Typed Text : {text}</p>
        {/* prev는 이전에 가지고 있던 값을 의미한다. */}
        <button onClick={() => setCount((prev) => prev +1)}>클릭</button>
        <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
    </div>
  );
}

export default MemoTest01;