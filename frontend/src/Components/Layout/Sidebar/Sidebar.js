import React from "react";
import { Link } from "react-router-dom";
import Home from "@material-ui/icons/HomeRounded";
import ExploreIcon from "@material-ui/icons/ExploreOutlined";
import NotificationsIcon from "@material-ui/icons/NotificationsNoneOutlined";
import EmailIcon from "@material-ui/icons/MailOutlined";
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined";
import AssignmentIcon from "@material-ui/icons/AssignmentOutlined";
import TwitterIcon from "@material-ui/icons/Twitter";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ProfileInfo from "../../Shared/ProfileInfo/ProfileInfo";
import TweetButton from "../../Shared/TweetButton/TweetButton";

function Sidebar() {
  const iconSize = {
    fontSize: "40px",
  };
  return (
    <nav className="sidebar">
      <ul className="navbar">
        <Link className="links" to="/">
          <li className="navbar__item remove-hover">
            <TwitterIcon
              style={{ fontSize: "34px" }}
              className="navbar__item__icon "
            />
            <span className="navbar__item__title"></span>
          </li>
        </Link>

        <Link className="links" to="/">
          <li className="navbar__item">
            <Home style={{ fontSize: "34px" }} className="navbar__item__icon" />
            <span className="navbar__item__title ">Home</span>
          </li>
        </Link>

        <Link className="links" to="/explore">
          <li className="navbar__item">
            <ExploreIcon
              style={{ fontSize: "34px" }}
              className="navbar__item__icon"
            />
            <span className="navbar__item__title ">Explore</span>
          </li>
        </Link>

        <li className="navbar__item">
          <NotificationsIcon
            style={{ fontSize: "34px" }}
            className="navbar__item__icon"
          />
          <span className="navbar__item__title ">Notification</span>
        </li>
        <li className="navbar__item">
          <EmailIcon
            style={{ fontSize: "34px" }}
            className="navbar__item__icon"
          />
          <span className="navbar__item__title ">Messages</span>
        </li>
        <li className="navbar__item">
          <BookmarkIcon
            style={{ fontSize: "34px" }}
            className="navbar__item__icon"
          />
          <span className="navbar__item__title ">Bookmarks</span>
        </li>
        <li className="navbar__item">
          <AssignmentIcon
            style={{ fontSize: "34px" }}
            className="navbar__item__icon"
          />
          <span className="navbar__item__title ">Lists</span>
        </li>
        <li className="navbar__item">
          <MoreHorizIcon
            style={{ fontSize: "34px" }}
            className="navbar__item__icon"
          />
          <span className="navbar__item__title ">More</span>
        </li>
      </ul>
      <TweetButton />
      <ProfileInfo type={"sidebar__avatar"} />
    </nav>
  );
}

export default Sidebar;
