import React from "react";
import "../Css/Memee_user_story.css";
import Stories from "react-insta-stories";
import story_1 from "../images/story/story_1.jpg";
import story_2 from "../images/story/story_2.jpg";
import story_3 from "../images/story/story_3.jpg";
import { useNavigate } from "react-router-dom";

export default function Memee_user_story() {
  const Navigate = useNavigate();
  const story = [
    {
      id: 1,
      url: story_3,
      duration: 2000,
      header: {
        heading: "Astronut",
        subheading: "Posted 30m ago",
        profileImage: "https://picsum.photos/100/100",
      },
    },
  ];
  return (
    <>
      <div className="Memee_user_story">
        <Stories
          stories={story}
          loop={true}
          priority={3}
          defaultInterval={7000}
          keyboardNavigation={false}
          width={"100%"}
          height={"100%"}
          onAllStoriesEnd={() => Navigate("/Home_page")}
        />
      </div>
    </>
  );
}
