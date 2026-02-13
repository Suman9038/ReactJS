import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  // Ye code hai jab use effect ka jo ki actual use nahi hai useEffect ka q ki ye kaam humloh function ka sath v kar skte aram se ise humlog mounting karta hai
  // useEffect(() => {
  //   console.log('useEffect runnig .....')
  // })

  // Ye useEffect ka asli use hai jaha humlog depencies array pass kiya hai jiska mtlb ye hai ki humlog ka useEffect ek bar toh atleast chalega hi chalega
  useEffect(() => {
    console.log("useEffect runnig .....");
  }, [num2]);

  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>
      <button
        onMouseEnter={() => {
          setNum(num + 1);
        }}
        onMouseLeave={() => {
          setNum2(num + 2);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default App;
