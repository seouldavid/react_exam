import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function Page() {
  return (
    <div>
      <div className='page'>
        <Header />
        <Main  />
        <Footer />
      </div>
    </div>
  );
}

export default Page;