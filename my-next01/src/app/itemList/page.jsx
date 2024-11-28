"use client"
import { Divider, Grid2 } from '@mui/material';
import './itemList.css'
import { use, useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
function page(props) {

  const MAKEUP_API_BASE_URL = process.env.NEXT_PUBLIC_MAKEUP_API_BASE_URL;
  const [list, setList] = useState(null); // 데이터 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태
  // const [list,setList] =useState([]);
  // const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  const API_URL = `${MAKEUP_API_BASE_URL}/v1/products.json?brand=maybelline`;
  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setList(response.data.slice(0, 12));
    } catch (error) {
      console.error("Error fetxhing data :", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  //최초 한번만 실행
  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <div style={{ textAlign: "center", padding: "20px" }}>Loading...</div>;
  }

  // 에러 발생 시
  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "20px", color: "red" }}>
        <h2>Error:</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div style={{ width: "80%", margin: "0 auto", padding: "20px" }}>
      <h2>베스트 상품</h2>
      <Divider />
      <Grid2 container spacing={2} >
        {list.map(k => {
          return <Grid2 size={{ xs: 3 }} key={k.id}>
            <Link href={'/view/' + k.id}>
              <img src={k.image_link} alt='' className='img_item' />
              <strong>{k.name}</strong>
              <span className='txt_info'>{k.category} &nbsp; &nbsp; {k.product_type}</span>
              <strong className='num_price'>{k.price}</strong>
            </Link>
          </Grid2>
        })}
      </Grid2>
    </div>
  );
}

export default page;