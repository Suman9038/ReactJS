import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <div className="parent">
        <Card user="Luffy" age={18} img="https://i.pinimg.com/1200x/42/1e/1f/421e1feae769a905e1e0fdf4679983b7.jpg"/>
        <Card user="Naruto" age={19} img="https://i.pinimg.com/1200x/ef/1f/9f/ef1f9fb1d02924c31d084282f1b78a83.jpg"/>
      </div>
    </>
  );
};

export default App;
