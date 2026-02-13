import React from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  // Ye bata ta hai ki humlog konsa route p hai course details page ka basically parameter de deta hai url ka 
  let param = useParams();
  console.log(param);
  return (
    <div>
      <h1>CourseDetail Page</h1>
    </div>
  );
};

export default CourseDetail;
