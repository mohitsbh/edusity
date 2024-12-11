import React, { useRef } from "react";
import "./Videoplayer.css";
import video from "../../assets/Mobile_CR_in_30_seconds(360p).mp4"

const Videoplayer = ({ playstate, setplaystate }) => {
  const player = useRef(null);

  const closeplayer=()=>{
    if(e.target===player.current){
        setplaystate(false);
    }
  }

  return (
    <div className={`videoplayer ${playstate ? "" : "hide"}`} ref={player} onClick={closeplayer}>
      <video src={video} autoPlay muted  controls></video>
    </div>
  );
};

export default Videoplayer;
