import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { menu } from "./SidebarConfig";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import CreatePostModal from "../Post/CreatePostModal";
import SearchComponents from "../SearchComponents/SearchComponents";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleTabClick = (title) => {
    setActiveTab(title);
    if (title === "Profile") {
      navigate("/username");
    } else if (title === "Home") {
      navigate("/");
    } else if (title === "Create") {
      onOpen();
    }
    if (title === "Search") {
      setIsSearchVisible(true);
    } else {
      setIsSearchVisible(false);
    }
  };
  return (
    <div className="sticky top-0 h-[100vh] flex">
      <div
        className={`flex flex-col justify-between h-full ${
          activeTab === "Search" ? "px-2" : "px-10"
        }`}
      >
        {
          <div>
            {activeTab !== "Search" && (
              <div className="pt-10">
                <img
                  className="w-40 "
                  src="https://i.imgur.com/zqpwkLQ.png"
                  alt=""
                />
              </div>
            )}
            <div className="mt-10">
              {menu.map((item) => {
                return (
                  <div
                    className="flex items-center mb-5 cursor-pointer text-lg"
                    key={item.title}
                    onClick={() => handleTabClick(item.title)}
                  >
                    {activeTab === item.title ? item.activeIcon : item.icon}
                    {activeTab !== "Search" && (
                      <p
                        className={`${
                          activeTab === item.title
                            ? "font-bold"
                            : "font-semibold"
                        }`}
                      >
                        {item.title}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        }
        <div className="flex items-center cursor-pointer pb-10">
          <IoReorderThreeOutline className="text-2xl" />
          {activeTab !== "Search" && <p className="ml-5">More</p>}
        </div>
      </div>
      <CreatePostModal isOpen={isOpen} onClose={onClose} />
      {isSearchVisible && <SearchComponents />}
    </div>
  );
};

export default Sidebar;
