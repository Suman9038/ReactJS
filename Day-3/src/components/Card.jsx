import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div>
      <div className="card">
        <img
          src={props.img}
          alt="Card Image"
        />
        <h1>{props.user}</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, velit?
        </p>
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default Card;
