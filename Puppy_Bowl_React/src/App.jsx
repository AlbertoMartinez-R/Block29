import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';
import NavBar from './components/NavBar';

function App() {
    const [players, setPlayers] = useState([]);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<AllPlayers setPlayers={setPlayers} setCurrentPlayerIndex={setCurrentPlayerIndex} />} />
                <Route path="/players/:playerId" element={
                    <SinglePlayer 
                        players={players} 
                        currentPlayerIndex={currentPlayerIndex} 
                        setCurrentPlayerIndex={setCurrentPlayerIndex} 
                    />
                } />
                <Route path="/new-player" element={<NewPlayerForm setPlayers={setPlayers} />} />
            </Routes>
        </Router>
    );
}

export default App;
