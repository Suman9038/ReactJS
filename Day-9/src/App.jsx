import React from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  return (
    <div>
      <form
        onSubmit={(events) => {
          events.preventDefault();
          console.log("Form Submitted by", title);
          setTitle("")
        }}
      >
        <input type="text" placeholder="Enter your name" value={title} onChange={(events)=>{
          console.log(events.target.value); // Jab v maina input mai koi changes ki woo jake title mai set ho gayi and wahi title mai value attribute se mai form k input field mai dikhara hu 
          setTitle(events.target.value); // Settting the title what ever we are writting in the input field
        }}/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
