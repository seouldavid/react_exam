import { Button } from '@mui/material';
import React from 'react';
// 선언식
// function Btn({name}) {
//   return (
//     <div>
//       <Button variant='contained'
//       onClick={() => console.log(name)}>{name}</Button>
//     </div>
//   );
// }
// 표현식
// const Btn = ({ name }) => (
//   <Button variant='contained' onClick={() => console.log(name)}>{name}</Button>
// )
//which 는 이벤트 헨들러에서 이벤트의 유형이나 성격을 나타내는 역할
//특정 이벤트가 발생 했을때 어떤 이벤트가 발생했는지를 나타내는 문자열 값을 전달받음

// () => (): 단순히 하나의 표현식을 바로 반환할때
// () => {}: 여러줄 코드할때 명시적으로 return을 표시할때

// const handleEvent = (name,which) => (
//       console.log(name,which)
// )
// const Btn = ({ name }) => (
//      <Button variant='contained' 
//      onMouseEnter={() => handleEvent(name, "onMouseEnter")}
//      onMouseLeave={() => handleEvent(name, "onMouseLeave")}
//      onDoubleClick={() => handleEvent(name, "onDoubleClick")}
//      onContextMenu={() => handleEvent(name, "onContextMenu")}>{name}</Button>
//    )

const handleEvent = (name,e) => (
  console.log(name,e)
)
const Btn = ({ name }) => (
 <Button variant='contained' 
 onClick={(e) => handleEvent(name, e)}
>{name}</Button>
)

export default Btn;