import React, { useEffect, useState } from 'react';
import BoxItem from '../box-item/box-item';
import "./box-grid.scss";
import {SOUNDS} from "../../consts/sounds";

interface BoxGridProps {
  playAll: boolean,
  handlePlayAllClick: (status: boolean) => void;
}

export type AudioObject  = {
  audioElement: HTMLAudioElement;
  isPlay: boolean;
}

const BoxGrid = ({playAll, handlePlayAllClick}:BoxGridProps) => {
  const [activeAudios, setActiveAudios] = useState<{ [p: number]: AudioObject } | null>(null)
  
  const handleActiveAudioClick = async(audioElement: HTMLAudioElement, isPlay: boolean, id: number) => {
    handlePlayAllClick(true);

    let obj = {audioElement, isPlay};

    if(activeAudios?.hasOwnProperty(id)){
      obj = {...activeAudios[id], isPlay: !activeAudios[id].isPlay};
    }

    setActiveAudios(prevState =>( {...prevState, [id]: obj}))
  }

  // useEffect(() => {
  //   activeAudios.map(el => playAll ? el.isPlay = true : el?.isPlay = false);
  // }, [playAll])

  useEffect(() => {
      if(!activeAudios){
          return;
      }
    // console.log("activeAudios", activeAudios);
    //
    //   Object.entries(activeAudios).map(([key, value]) => {
    //     value.audioElement.play();
    //   })
    // activeAudios[0]?.isPlay && activeAudios[0].audioElement.play();
      //   activeAudios[0]?.audioElement.addEventListener("ended", () => {
      //     activeAudios.forEach((el) => {
      //       el.audioElement.currentTime = 0;
      //       el.isPlay && el.audioElement.play();
      //     })
      //   })

  }, [activeAudios])


  return (
    <div className="box-grid">
       {SOUNDS.map((sound, index) => (
           <BoxItem key={sound} index={index} activeAudios={activeAudios} sound={sound} handleActiveAudioClick={handleActiveAudioClick} />
       ))}
    </div>
  )
}

export default BoxGrid