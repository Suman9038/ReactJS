import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  // console.log(props.jobs);

  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={props.jobs.brandLogo} alt="nachioooooo" />
          <button>
            Save <Bookmark size={10} />{" "}
          </button>
        </div>
        <div className="center">
          <h3>
            {props.jobs.company} <span>{props.jobs.datePosted}</span>
          </h3>
          <h2>{props.jobs.post}</h2>
          <div className="tag">
            <h4>{props.jobs.tag1}</h4>
            <h4>{props.jobs.tag2}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{props.jobs.pay}</h3>
          <p>{props.jobs.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
