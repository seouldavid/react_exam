import React, { useState } from 'react';

function FormEx(props) {
  const [username,setUserName] =useState("");
  const [isSubscribed,setSubscribed] =useState(false);
  const roles = ['user','admin','guest'];
  const [role,setRole] =useState(roles[0]);
  return (
    <form>
      <p>Name:{username} {isSubscribed && "(Subscribed)"}</p>
      <p>Role: {role}</p>
      <input 
      type="text"
      placeholder='UserName'
      value={username}
      onChange={ e => setUserName(e.target.value)}
      />
      <p>
        <input 
        type="checkbox"
        checked={isSubscribed}
        onChange={(e)=> { setSubscribed(e.target.checked)}}
        />
        <label >Subscribed</label>
      </p>
      <p>
        <select 
            value={role}
            onChange={e=>setRole(e.target.value)}
        >{roles.map((k)=>(<option key={k} value={k}  >{k}</option>))}
        </select>
      </p>

    </form>
  );
}

export default FormEx;