"use client";

import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";

function Page({ params }) {
    const LOCAL_API_BASE_URL = process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL;
    const [item, setItem] = useState(null); // 데이터 상태
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [error, setError] = useState(null); // 에러 상태

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); // 로딩 시작
                // params 언래핑: Promise로 감싸진 값을 꺼내는 과정
                // Promise.resolve(params)의 역할
                // Promise.resolve()는 전달된 값을 Promise 객체로 변환합니다.
                // 만약 params가 이미 Promise라면, 원래 Promise를 반환합니다.
                // 만약 params가 일반 객체라면, 이를 즉시 해결된(resolved) Promise로 감쌉니다.
                // Promise인지 아닌지 신경 쓰지 않고 항상 비동기적으로 다룰 수 있습니다.
                // const resolvedParams = await Promise.resolve(params); // params 언래핑
                // const { id } = resolvedParams; // id 추출
                const { id } = await Promise.resolve(params);
                const API_URL = `${LOCAL_API_BASE_URL}/guestbook/detail?gb_idx=${id}`;

                // 데이터 가져오기
                const response = await axios.get(API_URL);
                setItem(response.data);
            } catch (err) {
                console.error("Error fetching product data:", err);
                setError("Failed to fetch product data.");
            } finally {
                setLoading(false); // 로딩 종료
            }
        };

        fetchData();
    }, [params, LOCAL_API_BASE_URL]);

    // 로딩 중
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

    // 로딩 완료 후
    return (
        <div className="wrap">
            <div className="img_itemimg">
            </div>
            <div className="info_item">
                <strong className="tit_item"> 제목 : {item.gb_subject}</strong>
                <strong className="num_price">작성자 : {item.gb_name}</strong>
                <span className="txt_info"> 내용: <br />
                    {item.gb_content ? `${item.gb_content}/` : "내용 없음"}
                </span>
                <div className="button_group">
                    <Button variant="contained" color="success" style={{ marginRight: "10px" }}>
                        수정하기
                    </Button>
                    <Button variant="contained" color="error">
                        삭제하기
                    </Button>
                </div>
            </div>
            <div className="disWrap">
                <hr />
                <h1 style={{ margin: "20px" }}>Description</h1>
                <div style={{ paddingBottom: "20px", fontSize: "24px" }}>{item.description}</div>
            </div>
        </div>
    );
}

export default Page;