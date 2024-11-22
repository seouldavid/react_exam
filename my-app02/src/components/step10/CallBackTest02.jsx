import React, { useCallback, useEffect, useState } from 'react';

function CallBackTest02(props) {
  const [number,setNumber] = useState(0);

  //useEffect에서 input에서 증가/감수 클릭할 때마다 리렌더링이되면
  //someFunction의 객체(함수) 새로 생성 되면서 변경되는것을 감지한다.
  // const someFunction = () => {
  //   console.log(`someFunc : number : ${number}`);
  //   return;
  // }

  //useCallBack은 함수 자체를 저장한다.
  // 버튼을 누르면 someFunc :number : 0 나온다. 이유는 useCallback 저장할때 당시 number0 이었다.
  // const someFunction = useCallback(()=> {
  //   console.log(`someFunc : number : ${number}`);
  //   return;
  // },[]);
  const someFunction = useCallback(()=> {
    console.log(`someFunc : number : ${number}`);
    return;
  },[number]);
  
  useEffect(()=>{ console.log("somefunc 변경되었네요")},[someFunction]);
  return (
    <div>
      <input type="number"
              value={number}
              onChange={(e)=>setNumber(e.target.value)} />
              <br />
              <button onClick={someFunction}>someFunction 함수 호출</button>
    </div>
  );
}

export default CallBackTest02;