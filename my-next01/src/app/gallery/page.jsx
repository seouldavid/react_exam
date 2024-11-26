import Image from 'next/image';
import React from 'react';
import "./gallery.css"
function page(props) {
  return (
    <table>
      <tbody>
        <tr>
        <td> <Image src="/images/coffee-blue.jpg" width={50} height={50}></Image> </td>
        <td> <Image src="/images/tree-1.jpg" width={50} height={50}></Image> </td>
        <td> <Image src="/images/tree-2.jpg" width={50} height={50}></Image> </td>
        </tr>
        <tr>
        <td> <Image src="/images/tree-3.jpg" width={50} height={50}></Image> </td>
        <td> <Image src="/images/tree-4-thumb.jpg" width={50} height={50}></Image> </td>
        <td> <Image src="/images/coffee-blue.jpg" width={50} height={50}></Image> </td>
        </tr>
      </tbody>
    </table>
  );
}

export default page;