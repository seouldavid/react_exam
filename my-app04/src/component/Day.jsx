import { useParams } from "react-router-dom";
//import dummy from "../db/data.json"
import Word from "./Word";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

function Day(props) {
  // const day = 1;
  // url 에 포함된 day값을 가져오기 위해서 useParams()
  const day = useParams().day;
  const words = useFetch(`http://localhost:3010/words?day=${day}`)

  return (
    <table>
      <tbody>
        {/* {dummy.words.map((k)=>{ */}
        {words.map((k) => {
          return <Word key={k.id} word={k}/>
        })}
      </tbody>
    </table>
  );
}

export default Day;