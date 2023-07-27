import React from "react";
import StoryViewer from "../../Components/StoryComponents/StoryViewer";

const Story = () => {
  const story = [
    {
      image:
        "https://cdn.pixabay.com/photo/2022/04/20/01/23/wedding-7144049_1280.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/12/19/20/32/paper-1100254_640.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_640.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2013/05/11/08/28/sunset-110305_640.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/12/11/15/34/lion-3012515_640.jpg",
    },
  ];
  return (
    <div>
      <div>
        <StoryViewer stories={story} />
      </div>
    </div>
  );
};

export default Story;
