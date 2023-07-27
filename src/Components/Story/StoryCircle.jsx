import React from "react";
import { useNavigate } from "react-router-dom";

const StoryCircle = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/story");
  };
  return (
    <div
      className="cursor-pointer flex flex-col items-center"
      onClick={handleNavigate}
    >
      <div className="w-[4.3rem] h-[4.3rem] rounded-full flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <img
          className="w-16 h-16 rounded-full "
          src="https://cdn.pixabay.com/photo/2023/07/17/13/50/baby-snow-leopard-8132690_960_720.jpg"
          alt=""
        />
      </div>
      <p className="">username</p>
    </div>
  );
};

export default StoryCircle;
