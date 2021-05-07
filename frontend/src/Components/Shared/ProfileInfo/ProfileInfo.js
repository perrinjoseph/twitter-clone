import React from "react";
import Avatar from "@material-ui/core/Avatar";
function ProfileInfo({ type, children }) {
  return (
    <div className={type}>
      <div className="profile-flex">
        <Avatar src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhdyUyMHNjaG9vbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
        <section style={{ marginLeft: "10px", fontSize: "0.8rem" }}>
          <span className="sidebar__avatar__displayName">Perrin Joseph</span>
          <br></br>
          <span className="sidebar__avatar__username">@perrinjoseph</span>
        </section>
      </div>
      <section>{children}</section>
    </div>
  );
}

export default ProfileInfo;
