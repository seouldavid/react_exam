
//layout.js 는 선택이다. (RootLayout 제외)
//layout 이 필요없는 간단한 페이지에서는 생략 가능

import Link from "next/link";

// 페이지 전체의 공통구조를 렌더링 할때 사용

// 부모 컴포넌트
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{textAlign : "center"}}>
        {/* <header style={{marginTop: "50px" }}>공통 헤더</header> */}
        {/* 자식 컴포넌트가 렌더링 된다. */}
        {/* {children} */}
        {/* <footer style={{marginTop: "50px" }}>공통 푸터</footer> */}
        <h1><Link href="/">WEB</Link> </h1>
        <ol>
          <li><Link href="/read/1">HTML</Link></li>
          <li><Link href="/read/2">CSS</Link></li>
          <li><Link href="/read/3">JS</Link></li>
          <li><Link href="/gallery">image</Link></li>
          <li>ItemList(외부 서버)</li>
          <li>Guestbook(spring 서버)</li>
        </ol>
        <hr/>
        {children}
        
        <hr/>
        <ul>
          {/* /create 이면 create 폴더를 찾는다. 
             (page.jsx(필수),layout.jsx(선택) 가 있어야한다.) */}
          <li><Link href="/create">Create</Link></li>
          <li>Update</li>
          <li><input type="button" value="delete" /></li>
        </ul>
      </body>
    </html>
  );
}
