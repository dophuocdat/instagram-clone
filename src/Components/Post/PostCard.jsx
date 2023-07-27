import React, { useState } from "react";
import {
  BsBookFill,
  BsBookmark,
  BsEmojiSmile,
  BsThreeDots,
} from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import "./PostCard.css";
import CommentModal from "../Comment/CommentModal";
import { useDisclosure } from "@chakra-ui/react";

const PostCard = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isPostLike, setIsPostLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    setShowDropDown((s) => !s);
  };

  const handlePostLike = () => {
    setIsPostLiked((like) => !like);
  };

  const handleSavePost = () => {
    setIsSaved((s) => !s);
  };
  const handleOpenCommentModel = () => {
    onOpen();
  };

  return (
    <div>
      <div className="border rounded-md w-full">
        <div className="flex justify-between items-center w-full py-4 px-5">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full"
              src="https://cdn.pixabay.com/photo/2023/03/31/13/19/girl-7889973_640.jpg"
              alt=" "
            />
            <div className="pl-2">
              <p className="font-semibold text-sm">username</p>
              <p className="font-thin text-sm">location</p>
            </div>
          </div>
          <div className="dropdown">
            <BsThreeDots
              onClick={handleClick}
              className="cursor-pointer dots"
            />
            <div className="dropdown-content">
              {showDropDown && (
                <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">
                  Delete
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            src="https://cdn.pixabay.com/photo/2023/07/12/12/03/bird-8122381_640.png"
            alt=""
            className=""
          />
        </div>
        <div className="flex justify-between items-center w-full px-5 py-4">
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
            <FaRegComment
              onClick={handleOpenCommentModel}
              className="text-xl hover:opacity-50 cursor-pointer"
            />
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
          <p className="opacity-50 py-2 cursor-pointer">view all 10 comments</p>
        </div>
        <div className="border border-t w-full">
          <div className="flex w-full items-center px-5 ">
            <BsEmojiSmile />
            <input
              className="commentInput"
              type="text"
              placeholder="Add a comment..."
            />
          </div>
        </div>
      </div>
      <CommentModal
        handlePostLike={handlePostLike}
        onClose={onClose}
        isOpen={isOpen}
        handleSavePost={handleSavePost}
        isPostLike={isPostLike}
        isSaved={isSaved}
      />
    </div>
  );
};

export default PostCard;
