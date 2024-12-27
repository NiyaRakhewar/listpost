import React from "react";
import Shimmer from "./ShimmerUI";

const PostsListPlaceholder = () => {
  return (
    <div className="card-grid"> 
     
      {Array.from({ length: 10 }).map((_, index) => (
       <div className="card-grid"> 
          <Shimmer key={index}/>
   </div>
      ))}
    </div>
  );
};

export default PostsListPlaceholder;
