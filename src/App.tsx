import axios from "axios";
import React, { useEffect, useState } from "react";

interface AppType {
  id: number;
  name: string;
}

const App = () => {
  const [value, setValue] = useState<string>("");
  const [pro, setPro] = useState<AppType[]>([]);
  const [loading, setLoading] = useState(true);

  const getdata = async () => {
    try {
      const { data } = await axios.get(
        "https://api-v2.elchocrud.pro/api/v1/32bffff3019f527b1204f6d94a6c73b2/product_v1"
      );
      setPro(data);
      console.log(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const postData = async () => {
    try {
      const { data } = await axios.post(
        "https://api-v2.elchocrud.pro/api/v1/32bffff3019f527b1204f6d94a6c73b2/product_v1",
        {
          name: value,
        }
      );
      setPro(data);

      console.log(data);
    } catch (e) {
      console.error(e);
    }
    setValue("");
  };

  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      <div className="">
        <button onClick={postData}>add</button>

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="">
            {pro.map((el, idx) => (
              <div className="">
                <h2 key={idx}>{el.name}</h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
