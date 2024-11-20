import React from 'react';

function TempInput({value,onChange,unit}) {
  return (
    <div>
      <input 
            type="number"
            value={value}
            
            onChange={(e)=>onChange(e.target.value)}
            placeholder= {`In ${unit}`} />{unit}
    </div>
  );
}

export default TempInput;