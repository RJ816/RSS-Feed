// const sendUrl = async (url) => {
//     try {
//       const response = await fetch("http://localhost:8080/save-url", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: `url=${encodeURIComponent(url)}`,
//       });
  
//       if (!response.ok) {
//         throw new Error(`Failed to send URL to the server: ${response.statusText}`);
//       }
  
//       return response.text(); // Assuming the server returns plain text
//     } catch (error) {
//       throw new Error(`Error fetching data: ${error.message}`);
//     }
//   };

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;


