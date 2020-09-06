import React from "react";
import "./Footer.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function Footer({ channel, description, song }) {
  return (
    <div className="footer-div">
      <div className="footer-text">
        <h3 style={{ fontSize: 18, paddingBottom: 9 }}>@{channel}</h3>{" "}
        {/*@motormuscle69 */}
        <p style={{ fontSize: 13, paddingBottom: 9 }}>
          {description}
          {/* Belzebuth's asking for a hitch-hike */}
        </p>
        <MusicNoteIcon className="note" />
        <Ticker mode="smooth">
          {({ index }) => <p style={{ fontSize: 13, lineHeight: 2 }}>{song}</p>}
        </Ticker>
      </div>
      <img
        className="record"
        src="https://static.thenounproject.com/png/934821-200.png"
      ></img>
    </div>
  );
}

export default Footer;
