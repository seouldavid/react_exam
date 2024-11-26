
//page.js는 필수이다. (생략 불가)
//각 경로(/,/about,/content ..) 마다 페이지를렌더링 하려면 
//해당 경로의 page.js 파일이 반드시 필요하다.

import Image from "next/image";
import img01 from "/public/images/tree-1.jpg"
//자식컴포넌트
export default function Home() {
  return (
    // 해당 내용은 부모 컴포넌트의 props => {children}에 삽입된다.
    <>
    <h1>Welcome</h1>
    {/* 이미지를 import 하지 않으면 너비와 높이를 넣어줘야 한다. */}
    <p><Image width={100} height={100} src="/images/coffee-blue.jpg" alt="커피블루"/> </p>

    {/* 너비 높이는 선택 사항 */}
    <p><Image src={img01} /> </p>
    <p><Image width={100} height={100} src={img01} alt="커피블루"/> </p>
    </>
  );
}
