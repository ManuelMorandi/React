import './App.css';
import { useSignals } from '@preact/signals-react/runtime';
import { SongCounter } from './components/SongCounter';
import { AddSong } from './components/AddSong';
import { SongList } from './components/SongList';

function App() {
  useSignals();

  return (
    <>
    <div className='header'>
      <SongCounter />
    </div>
    <div className='container'>
      <div className='inputs'>
        <AddSong />
      </div>
      <div className='list'>
        <SongList />
      </div>
    </div>
    </>
  );
}

export default App;
