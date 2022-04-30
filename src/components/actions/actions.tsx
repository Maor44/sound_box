import './actions.scss';

interface ActionsProps {
    playAll: boolean,
    handlePlayAllClick: (status: boolean) => void;
}

const Actions = ({playAll, handlePlayAllClick}: ActionsProps) => {
    return (
        <div className="actions">
            <label htmlFor="MusicOn" className="actions__toggle">Music On</label>
            <input id="MusicOn" type="checkbox" name="actions__toggle" className="actions__checkbox" checked={playAll}
                   onChange={(e) => handlePlayAllClick(e.target.checked)}/>
            <div className="actions__custom__checkbox"></div>
        </div>
    )
}

export default Actions