import { useState } from 'react';
import Actions from './components/actions/actions';
import BoxGrid from './components/box-grid/box-grid'
import Navbar from './components/navbar/navbar';
import "./ui/ui.scss";

const App = () => {
  const [playAll, setPlayAll] = useState(false);

  const handlePlayAllClick = (status: boolean) => {
      setPlayAll(status)
  }

  return (
    <>
      <Navbar title="Sound Box" />
      <div className='app container'>
        <Actions playAll={playAll} handlePlayAllClick={handlePlayAllClick} />
        <BoxGrid playAll={playAll} handlePlayAllClick={handlePlayAllClick} />
      </div>
    </>
  )
}

export default App