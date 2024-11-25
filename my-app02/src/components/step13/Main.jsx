import React from 'react';

function Main({isDark}) {

  return (
    <div
      className='content'
      style={{
        backgroundColor: isDark? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black'
      }}
    >
      <h1>홍길동 님 좋은 하루 되세요</h1>
    </div>
  );
}

export default Main;