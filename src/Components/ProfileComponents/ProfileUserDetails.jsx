import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { TbCircleDashed } from "react-icons/tb";
import EditModal from "./EditProfile/EditModal";

const ProfileUserDetails = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenEdtProfile = () => {
    onOpen();
  };

  return (
    <div className="py-10 w-full ">
      <div className="flex items-center">
        <div className="w-[15%]">
          <img
            className="w-32 h-32 rounded-full"
            src="https://cdn.pixabay.com/photo/2023/06/27/10/51/man-8091933_1280.jpg"
            alt=""
          />
        </div>

        <div className="space-y-5">
          <div className="flex space-x-10 items-center">
            <p>dophuocdat</p>
            <button onClick={handleOpenEdtProfile}>Edit Profile</button>
            <TbCircleDashed />
          </div>
          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>posts</span>
            </div>
            <div>
              <span className="font-semibold mr-2">5</span>
              <span>follower</span>
            </div>
            <div>
              <span className="font-semibold mr-2">7</span>
              <span>following</span>
            </div>
          </div>
          <div>
            <p className="font-semibold">DAT DEVELOPER</p>
            <p className="font-thin text-sm">
              📚Learning something new every day.👨‍🎓
            </p>
          </div>
          <EditModal isOpen={isOpen} onClose={onClose} profile={"dophuocdat"} />
        </div>
      </div>
    </div>
  );
};

export default ProfileUserDetails;
