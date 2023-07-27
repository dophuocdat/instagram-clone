import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import {
  BsBookFill,
  BsBookmark,
  BsEmojiSmile,
  BsThreeDots,
} from "react-icons/bs";
import CommentCard from "./CommentCard";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import "./CommentModal.css";

const CommentModal = ({
  onClose,
  isOpen,
  isSaved,
  isPostLike,
  handlePostLike,
  handleSavePost,
}) => {
  return (
    <div>
      <Modal size={"6xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="h-[75vh] flex ">
              <div className="w-[45%] flex flex-col justify-center">
                <img
                  className="max-h-full w-full"
                  src="https://cdn.pixabay.com/photo/2023/07/19/12/16/car-8136751_640.jpg"
                  alt=""
                />
              </div>
              <div className=" w-[55%] pl-10 relative">
                <div className="flex justify-between  items-center py-5">
                  <div className="flex items-center">
                    <div className="">
                      <img
                        className="w-9 h-9 rounded-full"
                        src="https://cdn.pixabay.com/photo/2023/07/19/05/54/european-shorthair-8136129_640.jpg"
                        alt=""
                      />
                    </div>
                    <div className="ml-2">
                      <p>Username</p>
                    </div>
                  </div>
                  <BsThreeDots />
                </div>
                <hr />
                <div className="comment">
                  {Array.from({ length: 3 }, (_, i) => {
                    return <CommentCard key={i} />;
                  })}
                </div>
                <div className="absolute bottom-0 w-[90%]">
                  <div className="flex justify-between items-center w-full py-4">
                    <div className="flex items-center space-x-2">
                      {isPostLike ? (
                        <AiFillHeart
                          onClick={handlePostLike}
                          className=" hover:opacity-50 cursor-pointer text-red-500 text-2xl"
                        />
                      ) : (
                        <AiOutlineHeart
                          onClick={handlePostLike}
                          className="hover:opacity-50 cursor-pointer text-2xl"
                        />
                      )}
                      <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
                      <RiSendPlaneLine />
                    </div>
                    <div className="cursor-pointer">
                      {isSaved ? (
                        <BsBookFill
                          className="text-xl hover:opacity-50 cursor-pointer"
                          onClick={handleSavePost}
                        />
                      ) : (
                        <BsBookmark
                          className="text-xl hover:opacity-50 cursor-pointer"
                          onClick={handleSavePost}
                        />
                      )}
                    </div>
                  </div>
                  <div className="w-full py-2 px-5">
                    <p>10 Likes</p>
                    <p className="opacity-50 text-sm"> 1 day ago</p>
                  </div>
                  <div className="border border-t w-full">
                    <div className="flex w-full items-center px-5 gap-1 ">
                      <BsEmojiSmile />
                      <input
                        className="commentInput outline-none border-none w-full"
                        type="text"
                        placeholder="Add a comment..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CommentModal;
