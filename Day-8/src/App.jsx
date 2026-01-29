import React from "react";
import { useState } from "react";

const App = () => {
  // const [num, setNum] = useState(0);
  const [user, setUser] = useState({user:"React", age:20});
  const [num, setNum] = useState(0)

  return (
    <>
    {/* Counter code */}
    {/* <div>
      <h1>{num}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setNum(num - 1);
        }}
      >
        Decrease
      </button>
    </div> */}
    {/* Counter code  End*/}
    <div>
      <h1>{user.user} is {user.age} years old <br /> Count is {num}</h1>
      <button onClick={()=>{
        let newUser = {...user}
        newUser.user = "React ka Chota bhai"
        newUser.age = 15
        setUser(newUser)
        // Batch Update Example
        setNum(prev=> prev + 1)
        setNum(prev=> prev + 1)
        setNum(prev=> prev + 1)
      }}>Click Me</button>
    </div>
    </>
  );
};

export default App;
