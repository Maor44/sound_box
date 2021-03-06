import './box-item.scss';
import {useRef} from 'react';
import Record from '../../assets/images/record.svg';
import {AudioObject} from "types";

interface BoxItemProps {
    activeAudios: { [p: number]: AudioObject };
    sound: string;
    index: number;
    handleActiveAudioClick: (audioElement: HTMLAudioElement, isPlay: boolean, id: number) => void;
}

const BoxItem = ({sound, handleActiveAudioClick, index, activeAudios}: BoxItemProps) => {
    const audioBoxRef = useRef<HTMLAudioElement | null>(null)

    const handleBoxClick = async () => {
        if (audioBoxRef.current) {
            if (!audioBoxRef.current.paused) {
                audioBoxRef.current.pause();
                audioBoxRef.current.currentTime = 0;
            }
            handleActiveAudioClick(audioBoxRef.current, true, index);
        }
    }

    return (
        <div data-testid="box-item"
             className={`box-item ${activeAudios[index]?.isPlay ? "box-item--pause" : "box-item--start"}`}
             onClick={handleBoxClick}>
            <img className={`box-item__record ${activeAudios[index]?.isPlay ? "box-item__record--loop" : ""}`}
                 src={Record} alt="Record"/>
            <audio data-testid="audio" className="box-item__audio" ref={audioBoxRef} src={sound} controls/>
        </div>
    )
}

export default BoxItem