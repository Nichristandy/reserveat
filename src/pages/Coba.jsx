import { useEffect, useState } from "react";
import axios from "axios";

const Coba = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/ReadReservasiAll"
        );
        setData(response.data.data);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      {" "}
      <h1>Data from API</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id_reservasi}>{item.nomor_meja}</li>
        ))}
      </ul>
    </div>
  );
};

export default Coba;
