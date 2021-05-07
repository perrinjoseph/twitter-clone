import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Explore from "../../Pages/Explore/Explore";
import Home from "../../Pages/Home/Home";

function Feed() {
  return (
    <section className="feed">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/explore">
          <Explore />
        </Route>
      </Switch>
    </section>
  );
}

export default Feed;
