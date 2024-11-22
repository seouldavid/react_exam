import React, { useEffect, useRef } from 'react';

function RefTest05(props) {
  const inputRef = useRef();
  //맨 처음 실행 할때는 의존성배열이 []이다.


  useEffect(() => { 
    inputRef.current.focus();
  },[]);

  const handleKeyDown = (e) => {
    if (e.key == 'Enter') {
      login();
    }
  }

  const login = () => {
    const inputValue = inputRef.current.value;
    alert(`${inputValue}님, 환영합니다.`);
  }
  return (
    <div>
      <input
        type="text"
        placeholder='userName'
        ref={inputRef}
        onKeyDown={handleKeyDown} // 키 이벤트
      />
      <button onClick={login}>로그인</button>
    </div>
  );
}

export default RefTest05;