import axios from 'axios';
import React, { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);



  useEffect(() => {
    const fetchData =async () => {
      try {
        try {
          const response = await axios.get(url);
          setData(response.data);
        } catch (error) {
          
        }
      } catch (error) {
        console.error("Error : "+error)
      }
    }

    fetchData();
    // fetch(url)
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(data => {
    //     setData(data);
    //   })
    //   .catch((error) => console.log("Error" + error))

  }, [url]);
  return data;

}

export default useFetch;