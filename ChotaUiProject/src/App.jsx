import React from "react";
import Page1 from "./components/Page1/Page1";
import Page2 from "./components/Page2/Page2";

const App = () => {
  const users = [
    { img: "https://i.pinimg.com/1200x/3b/2e/72/3b2e72e4e2e7db1a93fe545e077128bb.jpg", intro: "", tag: "Satisfied" },
    { img: "https://i.pinimg.com/736x/a8/39/91/a83991a3a3c871fe3fb907e9e17e3033.jpg", intro: "", tag: "Underserved" },
    { img: "https://i.pinimg.com/736x/b6/26/b5/b626b532cc64d1a00439fa1f9b22598c.jpg", intro: "", tag: "Underbanked" },
  ];

  return (
    <div>
      <Page1 users ={users} />
      <Page2 />
    </div>
  );
};

export default App;
