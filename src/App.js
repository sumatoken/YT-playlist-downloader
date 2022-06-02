import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Playlist from "./Playlist"
import Home from "./Home"
function App() {
  return (
    <div className="App container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="playlist" element={<Playlist />}/>
        </Routes> 
    </div>
  );
}

export default App;
