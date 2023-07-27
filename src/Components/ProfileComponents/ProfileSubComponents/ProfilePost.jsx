import React from "react";
import ReqUserPostCard from "../ReqUserPostCard";

const ProfilePost = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        {Array.from({ length: 5 }, (_, i) => {
          return <ReqUserPostCard key={i} />;
        })}
      </div>
    </div>
  );
};

export default ProfilePost;
