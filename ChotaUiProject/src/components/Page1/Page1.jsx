import React from "react";
import Navbar from "../Page1/Navbar.jsx";
import Page1Content from "./Page1Content.jsx";

const Page1 = (props) => {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Page1Content users={props.users} />
    </div>
  );
};

export default Page1;
