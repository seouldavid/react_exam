
import React, { useEffect, useId, useRef } from 'react';

function UseIdTest(props) {
  const id = useId();
  const age = useId();
  const inputRef = useRef();
  const ageRef = useRef();

  useEffect(() => {
    //가져올 수 없다.
    // const element = document.querySelector(id);
    // console.log(element);

    const element = inputRef.current;
    console.log(element);
  }, []);

  console.log(id);
  return (
    <div>
      <label htmlFor={id}>이름</label>
      <input id={id} ref={inputRef} />

      {/* 만약 여러개일 경우 */}
      {/* <label htmlFor={age}>나이</label>
        <input id={age} ref={ageRef}/> */}

      <label htmlFor={`${id}-name`}>이름</label>
      <input id={`${id}-name`} ref={inputRef} />

      <label htmlFor={`${age}-age`}>나이</label>
        <input id={`${age}-age`} ref={ageRef}/>

    </div>
  );
}

export default UseIdTest;