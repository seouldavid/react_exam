import React, { useReducer, useState } from 'react';


function reducer(state,action) {
  switch (action.type) {
    case "add":
    return state + action.payload ; // 현재 상태(state)에 payload 더하기
    
    case "sub":
    return state - action.payload; //현재 상태(state)에 payload 빼기

    case "reset":
    return 0;
  }
}

function ReducerTest02(props) {
  const [money,dispatch] = useReducer(reducer,1000);
  const [number,setNumber] = useState(0);
  return (
    <div>
      <h2>ICT 은행 오신것을 환영합니다.</h2>
      <p>잔고 : {money}</p>
      <input 
      type="number"
      value={number}
      onChange={(e)=>{
        
        setNumber(e.target.value < 0 ? 0 :e.target.value)
      }}
        step="1000"
      />
      <button onClick={
        () => dispatch({type: "add", payload : parseInt(number)})}>예금</button>
      <button onClick={() => dispatch({type: "sub", payload : parseInt(number)})}>출금</button>
    </div>
  );
}

export default ReducerTest02;