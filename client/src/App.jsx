import './App.css'
import { Routes, Route } from 'react-router-dom'
import LobbyScreen from './components/Lobby'
import Room from './components/Room'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LobbyScreen />} />
        <Route path='/room/:roomId' element={<Room />} />
      </Routes>
    </>
  )
}

export default App
