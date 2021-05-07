import React from "react";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import ig from "../../../Images/fluid-bg.jpeg";

function UniversalCard() {
  return (
    <article className="uniCard">
      <ProfileInfo type={"universal-profile"}>
        <small>
          <span className="sidebar__avatar__username">
            {new Date().toUTCString()}
          </span>
        </small>
        <br></br>
        <textarea
          className="universal-body"
          type="text"
          disabled={true}
          value={
            "border-box tells the browser to account for any border and padding in the values you specify for width and height .."
          }
        ></textarea>
        <img style={{ marginTop: '30px' }} className="universal-img" src={ig}></img>
      </ProfileInfo>
    </article>
  );
}

export default UniversalCard;
