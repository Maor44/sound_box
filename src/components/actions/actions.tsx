import './actions.scss';

interface ActionsProps {
  playAll: boolean,
  handlePlayAllClick: (status: boolean) => void;
}

const Actions = ({playAll, handlePlayAllClick}: ActionsProps) => {
  return (
    <div className="actions">
        <span>Music on</span>
        <label htmlFor="actions__toggle" className="actions__toggle">
            <input type="checkbox" name="actions__toggle" className="actions__checkbox" checked={playAll} onChange={(e) => handlePlayAllClick(e.target.checked)} />
            <div className="actions__custom__checkbox"></div>
        </label>
    </div>
  )
}

export default Actions