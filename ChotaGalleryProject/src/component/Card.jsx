import React from "react";

const Card = (props) => {
  return (
    <div>
      <a href={props.item.url} target="_blank">
        <div className="h-40 w-44 bg-white rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={props.item.download_url}
            alt=""
          />
        </div>
        <h2 className="font-bold text-lg">{props.item.author}</h2>
      </a>
    </div>
  );
};

export default Card;
