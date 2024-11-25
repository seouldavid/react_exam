import React from 'react';

function Header({isDark,setIsDark}) {
  const toggleTheme = () =>{
    setIsDark(!isDark);
  }
  return (
    <header
      className='header'
      style={{
        backgroundColor: isDark? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black'
      }}
    >
      <h1>홍길동</h1>

    </header>
  );
}

export default Header;