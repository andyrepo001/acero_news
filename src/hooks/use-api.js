import { useEffect, useState } from "react";

export const useServerFetch = (url) => {
  const [retrievedData, setRetrievedData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(process.env.SERVER_API_URL + url, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `AnvilBearer ${process.env.SERVER_API_KEY}`,
          },
          cache: "no-cache",
        });

        const data = await res.json();

        if (data.status !== "success") return;

        setRetrievedData(data.data);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, [url]);

  return retrievedData;
};
