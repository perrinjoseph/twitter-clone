import CreatePost from "../../Shared/CreatePost/CreatePost";
import React from "react";
import FeedHeader from "../../Shared/FeedHeader/FeedHeader";
import UniversalCard from "../../Shared/UniversalCard/UniversalCard";

function Home() {
  return (
    <div className="home">
      <FeedHeader header={"Home"} />
      <CreatePost />
    <UniversalCard/>
    <UniversalCard/>
    <UniversalCard/>

    </div>
  );
}

export default Home;
