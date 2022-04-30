import React, { useEffect, useState } from 'react';
import BoxItem from '../box-item/box-item';
import "./box-grid.scss";
import {SOUNDS} from "consts/sounds";
import {AudioObject} from "types";

interface BoxGridProps {
  playAll: boolean,
  handlePlayAllClick: (status: boolean) => void;
}

const BoxGrid = ({playAll, handlePlayAllClick}:BoxGridProps) => {
  const [activeAudios, setActiveAudios] = useState<{ [p: number]: AudioObject }>({})
  const [waitNextIteration, setWaitNextIteration] = useState(true)
  
  const handleActiveAudioClick = async(audioElement: HTMLAudioElement, isPlay: boolean, id: number) => {
    let obj = {audioElement, isPlay};
    if(activeAudios?.hasOwnProperty(id)){
      obj = {...activeAudios[id], isPlay: !activeAudios[id].isPlay};
    }
    setActiveAudios(prevState =>( {...prevState, [id]: obj}));
    handlePlayAllClick(true);
  }

  useEffect(() => {
      Object.values(activeAudios).forEach((value) => {
        if(playAll){
          value.isPlay && value.audioElement.play();
        }
        else {
          value.audioElement.pause();
        }
      })
  }, [playAll]);


    useEffect(() => {
        Object.values(activeAudios).forEach(async(value) => {
          if(waitNextIteration){
                setWaitNextIteration(false)
                value.isPlay && await value.audioElement.play();
                value.audioElement.addEventListener("ended", () => {
                  setWaitNextIteration(true);
                  value.audioElement.currentTime = 0;
                  value.isPlay && value.audioElement.play();
                })
            }
        })


        if(Object.values(activeAudios).every(item => !item.isPlay)){
          handlePlayAllClick(false);
          setWaitNextIteration(true)
        }
    }, [activeAudios, waitNextIteration])


  return (
    <div className="box-grid">
       {SOUNDS.map((sound, index) => (
           <BoxItem key={sound} index={index} activeAudios={activeAudios} sound={sound} handleActiveAudioClick={handleActiveAudioClick} />
       ))}
    </div>
  )
}

export default BoxGrid