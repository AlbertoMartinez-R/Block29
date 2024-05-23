import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchAllPlayers } from './API/index.js'; 

function App() {
  const [players, setPlayers] = useState([]);
  console.log(players);

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const result = await fetchAllPlayers();
        setPlayers(result);
      } catch (err) {
        console.error("Not found");
      };
    };
    getPlayers();
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default App;
