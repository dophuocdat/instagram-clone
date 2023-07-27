import React from "react";
import SuggetionCard from "./SuggetionCard";

const HomeRight = () => {
  return (
    <div className="">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div>
              <img
                className="w-12 h-12 rounded-full"
                src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg"
                alt="  "
              />
            </div>
            <div className="ml-3">
              <p>FullName</p>
              <p className="opacity-70">username</p>
            </div>
          </div>
          <div>
            <p className="text-blue-700 font-semibold">Switch</p>
          </div>
        </div>
        <div className="space-y-5 mt-11">
          {Array.from({ length: 5 }, (_, i) => {
            return <SuggetionCard key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
