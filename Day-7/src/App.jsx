import React from "react";

const App = () => {
  // const btnClick = () => {
  //   alert("Button Clicked");
  // };

  // const onMouseEnter = () => {
  //   console.log("Mouse Entered");
  // };

  return (
    <>
      {/* <div>
        <h1>Hello React</h1>
        <button onMouseEnter={onMouseEnter} onClick={btnClick}>
          Click here
        </button>
        <button
          onClick={() => {
            console.log("Button Clicked");
          }}
        >
          Click here
        </button>
        <div>
          <input
            onChange={(events) => {
              if (events.target.value !== "" || events.target.value !== " ") {
                console.log(events.target.value);
              }
            }}
            type="text"
            placeholder="Enter Your Name"
          />
        </div>
      </div> */}
      <div
        onWheel={(events) => {
          // console.log("Page Scrollig");
          console.log(events.deltaY);
        }}
      >
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
    </>
  );
};

export default App;
   