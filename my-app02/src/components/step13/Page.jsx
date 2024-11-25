import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function Page({isDark,setIsDark}) {
  return (
    <div>
      <div className='page'>
        <Header isDark={isDark}/>
        <Main isDark={isDark} />
        <Footer isDark={isDark} setIsDark={setIsDark}/>
      </div>
    </div>
  );
}

export default Page;