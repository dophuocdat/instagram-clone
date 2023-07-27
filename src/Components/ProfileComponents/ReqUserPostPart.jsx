import React, { useEffect, useState } from "react";
import { AiOutlineTable, AiOutlineUser } from "react-icons/ai";
import { RiVideoAddLine } from "react-icons/ri";
import { BiBookmark } from "react-icons/bi";
import ProfilePost from "./ProfileSubComponents/ProfilePost";
import ProfileSaved from "./ProfileSubComponents/ProfileSaved";
const ReqUserPostPart = () => {
  const [activeTab, setActiveTab] = useState("Post");
  const tabs = [
    {
      tab: "Post",
      icon: <AiOutlineTable />,
      activeTab: <ProfilePost />,
    },
    {
      tab: "Reels",
      icon: <RiVideoAddLine />,
      activeTab: "",
    },
    {
      tab: "Saved",
      icon: <BiBookmark />,
      activeTab: <ProfileSaved />,
    },
    {
      tab: "Tagged",
      icon: <AiOutlineUser />,
      activeTab: "",
    },
  ];

  return (
    <div>
      <div className="flex space-x-14 border-t relative">
        {tabs.map((item) => {
          return (
            <div
              key={item.tab}
              className={`${
                activeTab === item.tab
                  ? "border-t border-black "
                  : "opacity-60 "
              }flex items-center cursor-pointer py-2 text-sm`}
              onClick={() => setActiveTab(item.tab)}
            >
              <p>{item.icon}</p>
              <p className="ml-1 text-sm">{item.tab}</p>
            </div>
          );
        })}
      </div>
      {tabs.map((item) => (item.tab === activeTab ? item.activeTab : null))}
    </div>
  );
};

export default ReqUserPostPart;
