import React, { useState } from 'react';

function Currency(props) {
  const [currencyBefore,setCurrencyBefore] = useState("usd");
  const [currencyAfter,setCurrencyAfter] = useState("usd");
  const [valueBefore,setValueBefore] = useState(1);
  const [valueAfter,setValueAfter] = useState(0);
  const currencyRate = {
    "usd" : 1,
    "won" : 1400,
    "yen":  160,
    "yuan": 7
  }
  
  return (
    <div>
      <input type="number" value={valueBefore} onChange={(e)=>{setValueBefore(e.target.value);setValueAfter(  (e.target.value * currencyRate[currencyAfter]/currencyRate[currencyBefore]).toFixed(2))

      }} /> <select value={currencyBefore} onChange={(e)=> setCurrencyBefore(e.target.value)} >{Object.keys(currencyRate).map((k)=>(<option key={k} value={k}>{k}</option>))} </select>
      
      ➜ <input type="number" value={valueAfter} /> <select value={currencyAfter} onChange={(e)=> setCurrencyAfter(e.target.value)} >{Object.keys(currencyRate).map((k)=>(<option key={k} value={k}>{k}</option>))} </select> 
      <br />
    </div>
  );
}

export default Currency;