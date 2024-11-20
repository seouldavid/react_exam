import React, { useState } from 'react';
import Profile from './Profile';
import './ProfileEx.css';

function ProfileEx({name,status}) {
  const [count,setCount] =useState(0);
  const [isActive,setActive] =useState(true);
  const names = ["홍길동","어드민","시스템"];
  return (
    <div className='center'>
      <h2>User Profile</h2>
      <button onClick={()=> {setActive(!isActive)}}>Toggle status</button>
      <button onClick={()=> {setCount((count+1)%names.length)}}>Switch user</button><br />
      <p>
      상태 : {isActive? "active":"inactive"}
      </p>
      <Profile name={names[count]}/>  
    </div>
  );
}

export default ProfileEx;