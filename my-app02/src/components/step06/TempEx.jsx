import React, { useState } from 'react';
import TempInput from './TempInput';
import TempRadio from './TempRadio';

function TempEx(props) {
  const [unit,setUnit] = useState("Celsius")
  const [temperature,setTemperature] = useState("");
  const convertedTemp = (unit === "Celsius")?(temperature * 9/5 + 32).toFixed(1):(((temperature-32)* 5/9).toFixed(1))
    return (
    <div>
      <h2>Temperature Converter</h2>
      <br />
      Converted:{temperature ? convertedTemp:"--"}'
      {unit === "Celsius"? "F":"C"}
      <br />
      <TempInput
          value={temperature}
          unit={unit}
          onChange={setTemperature}
      />
      {/* setter 함수를 자식에게 넘긴다. 
          자식 컴포넌트가 부모 컴포넌트를 state를 제어
      */}
      <TempRadio unit={unit}
                  onUnitChange={setUnit}

      />
    </div>
  );
}

export default TempEx;