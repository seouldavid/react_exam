import React, { useEffect, useState } from 'react';

function MemoTest04(props) {
  const [number,setNumber] =useState(0);
  const [isKorea,setIsKorea] = useState(true);

  //객체 : 렌더링 되면서 객체가 생성되고 생성된 객체의 주소가 변경되서 저장된다.
  const location ={ country :isKorea ? '한국' : '외국'};
  // const location = isKorea ? '한국' : '외국';
  useEffect(()=> {
    console.log('useEffect 호출')
  },[location]);


  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input 
      type="number" 
      value={number}
      onChange={(e)=> setNumber(e.target.value)}
      />
      <hr />
      <h2>어느나라 사람이 있나요?</h2>
      <p>나라 : {location.country}</p>
      <button onClick={()=> setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
}

export default MemoTest04;