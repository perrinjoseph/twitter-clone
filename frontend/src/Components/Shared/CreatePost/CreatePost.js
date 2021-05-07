import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import $ from "jquery";
import InsertPhotoOutlinedIcon from "@material-ui/icons/InsertPhotoOutlined";
import GifOutlinedIcon from "@material-ui/icons/GifOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined";
import IconButton from "@material-ui/core/IconButton";
import SubjectIcon from "@material-ui/icons/Subject";
import TweetButton from "../TweetButton/TweetButton";

function CreatePost() {
  const [lines, setLines] = useState(0);
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState(0);

  const help = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    setLines(input.split(/\r\n|\r|\n/).length);
  }, [input]);

  return (
    <article className="createPost">
      <Avatar src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhdyUyMHNjaG9vbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />

      <div style={{ width: "100%" }}>
        <textarea
          type="textarea"
          placeholder="What's happening?"
          className="createPost__input"
          onChange={(e) => help(e)}
          id="#ptest"
          rows={lines}
        ></textarea>

        <section className="createPost__post-options">
          <div>
            <IconButton onClick={() => setSelected(0)}>
              <SubjectIcon
                style={{ fill: `${selected === 0 ? " #1da1f2" : ""}` }}
              />
            </IconButton>

            <IconButton onClick={() => setSelected(1)}>
              <InsertPhotoOutlinedIcon
                style={{ fill: `${selected === 1 ? " #1da1f2" : ""}` }}
              />
            </IconButton>

            <IconButton onClick={() => setSelected(2)}>
              <GifOutlinedIcon
                style={{ fill: `${selected === 2 ? " #1da1f2" : ""}` }}
              />
            </IconButton>

            <IconButton onClick={() => setSelected(3)}>
              <EqualizerOutlinedIcon
                style={{ fill: `${selected === 3 ? " #1da1f2" : ""}` }}
              />
            </IconButton>

            <IconButton onClick={() => setSelected(4)}>
              <SentimentSatisfiedOutlinedIcon
                style={{ fill: `${selected === 4 ? " #1da1f2" : ""}` }}
              />
            </IconButton>

            <IconButton onClick={() => setSelected(5)}>
              <ScheduleOutlinedIcon
                style={{ fill: `${selected === 5 ? " #1da1f2" : ""}` }}
              />
            </IconButton>
          </div>
          <div style={{ width: "100px" }}>
            <TweetButton />
          </div>
        </section>
      </div>
    </article>
  );
}

export default CreatePost;
