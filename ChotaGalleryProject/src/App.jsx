import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./component/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  
  let getData = async () => {
    let res = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=21`,
    );
    console.log(res.data);
    setUserData(res.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className="text-gray-400 font-semibold text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map((item, index) => {
      return (
        <div key={index}>
          <Card item={item} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      {/* <button
        onClick={getData}
        className="bg-green-600 text-white px-5 py-2 active:scale-95 m-4"
      >
        Get data
      </button> */}
      <div className="flex flex-wrap gap-4 p-2 h-[82%] ">{printUserData}</div>
      <div className="flex justify-center items-center p-4 gap-6">
        <button
        style={{opacity: index == 1 ? 0.5 : 1}}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          className="bg-amber-400 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold"
        >
          Previosly
        </button>
        <h4>Page {index}</h4>
        <button
          onClick={() => {
            setUserData([]);
            setIndex(index + 1);
          }}
          className="bg-amber-400 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
