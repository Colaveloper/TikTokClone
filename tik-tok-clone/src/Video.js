import React, { useRef, useState } from "react";
import Footer from "./Footer";
import SideBar from "./SideBar";
import "./Video.css";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const videoRef = useRef(null); // hook to reference to an html object down there
  const [playing, setPlaying] = useState(false);
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause(); // current indicates that the current reference of videoRef has to be used
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        loop
        autoPlay
        onClick={onVideoPress}
        src={url}
        // "https://player.vimeo.com/external/451803780.sd.mp4?s=ae91ee61aad2c1e6bff2ee0124d89ee72e327bbb&profile_id=165&oauth2_token_id=57447761"
      ></video>
      <Footer channel={channel} description={description} song={song} />
      <SideBar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
