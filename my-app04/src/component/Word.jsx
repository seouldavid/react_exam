import axios from 'axios';
import React, { useState } from 'react';

//실제 DB를 수정하자
//Create : POST
//Read   : GET
//Update : PUT
//Delete : DELETE
function Word({ word }) {
  const [wo, setWo] = useState(word);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);
  function toggleShow() {
    setIsShow(!isShow);
  }
  // JSON.stringify : 객체를 json으로 변경 (보낼때)
  // response.json()메서드를 호출하면 JSON 데이터를 javascript 객체로 변환한다. (받을때)
  async function toggleDone() {
      try {
        const response = await axios.put(`http://localhost:3010/words/${word.id}`,{
          ...word,
          isDone: !isDone,
        });
        if (response.status === 200) { //리소스 생성이 아닌 단순히 작업이 성공을 표시
          setIsDone(!isDone);
        }
      } catch (error) {
        console.error("Error : " + error)
      }

    // setIsDone(!isDone);
    //실제 DB 수정하기
    // fetch(`http://localhost:3010/words/${word.id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     ...word,
    //     isDone: !isDone,
    //   })
    // }).then(res => {
    //   if (res.ok) {
    //     setIsDone(!isDone)
    //   }
    // })
    //   .catch((error) => console.error("Error" + error)
    //   );
  }

  async function del(params) {
    if (window.confirm('정말 삭제할까요?')) {
      try {
        const response = await axios.delete(`http://localhost:3010/words/${word.id}`);
        if (response.status === 200){
            setWo({id:0});
        }
      } catch (error) {
        console.error("Error2 : ",error);
      }
      //실제 DB 수정하기
      // fetch(`http://localhost:3010/words/${word.id}`, {
      //   method: 'DELETE',
      //   })
      // .then(res => {
      //   if (res.ok) {
      //     //상태를 초기화
      //     setWo({ id: 0 })
      //   }
      // })
      //   .catch((error) => console.error("Error" + error)
      //   );

    }
  }
  // id가 0 이면 아무런 렌더링 하지 않는다.
  // 컴포넌트가 null 리턴하면 렌더링을 하지 않는다.
  // 삭제후 UI에서 내용을 감추는 역할을 한다.
  if (wo.id === 0) {
    return null;
  }

  return (
    <tr className={isDone ? "off" : ""}>
      <td><input type='checkbox' checked={isDone} onChange={toggleDone} /></td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻{isShow ? '숨기기' : '보기'}</button>
        <button className="btn_del" onClick={del} >삭제</button>
      </td>
    </tr>
  );
}

export default Word;