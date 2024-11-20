import React from 'react';

function TempRadio({unit, onUnitChange}) {
  return (
    <div>
      
      <input type="radio"  value='Celsius' name='temp' checked={unit==="Celsius"} onChange={(e)=>onUnitChange(e.target.value)} /> Celsius 

      <input type="radio"  value='Fahrenheit' name='temp' id='fah' checked={unit==="Fahrenheit"} onChange={(e)=>onUnitChange(e.target.value)} /> Fahrenheit
    </div>
  );
}

export default TempRadio;