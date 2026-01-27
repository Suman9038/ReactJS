import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  // console.log(props);
  return (
    <div className="h-full w-80 overflow-hidden relative bg-red-500 rounded-4xl shrink-0 ">
      <img
        className="h-full w-full object-cover"
        src={props.user.img}
        alt="Backgrounnd Image"
      />
      <RightCardContent user={props.user} id ={props.id} />
    </div>
  );
};

export default RightCard;
