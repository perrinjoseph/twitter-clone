import React from "react";
import NewsCard from "../../Shared/NewsCard/NewsCard";
import SearchIcon from "@material-ui/icons/Search";

function News() {
  return (
    <section className="news">
      <div className="news__top">
        <SearchIcon />
        <input className= "news__search"type="text" placeholder="Search twitter"></input>
      </div>
      <NewsCard />
    </section>
  );
}

export default News;
