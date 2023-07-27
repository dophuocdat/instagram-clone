import React from "react";
import StoryCircle from "../../Components/Story/StoryCircle";
import HomeRight from "../../Components/HomeRight/HomeRight";
import PostCard from "../../Components/Post/PostCard";
import CreatePostModal from "../../Components/Post/CreatePostModal";
import { useDisclosure } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <div>
      <div className="flex mt-10 w-full justify-center">
        <div className="w-[44%] px-10 ">
          <div className="storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full">
            {Array.from({ length: 4 }, (_, i) => {
              return <StoryCircle key={i} />;
            })}
          </div>

          <div className="space-y-10 w-full mt-10">
            {Array.from({ length: 2 }, (_, i) => {
              return <PostCard key={i} />;
            })}
          </div>
        </div>
        <div className="w-[27%] ">
          <HomeRight />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HomePage;
