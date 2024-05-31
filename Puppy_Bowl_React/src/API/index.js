const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-MT-WEB-PT`;

// Limit the amount of players fetched
const PAGE_LIMIT = 20;

export const fetchAllPlayers = async (page = 0) => {
    try {
        const response = await fetch(`${API_URL}/players/`);
        const result = await response.json();
        const players = result.data.players;
        console.log(players);
        return players.slice(page * PAGE_LIMIT, (page + 1) * PAGE_LIMIT);
    } catch (err) {
        console.log("There are no players");
    }
}

export const fetchSinglePlayer = async (playerId) => {
    try {
        const url = `${API_URL}/players/${playerId}`;
        const response = await fetch(url);
        const playerDetails = await response.json();
        return playerDetails.data;
    } catch (error) {
        console.error("Uh oh, trouble fetching player details!", error);
    }
}

export const addNewPlayer = async (playerObj) => {
    try {
        const response = await fetch(`${API_URL}/players`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(playerObj)
        });
        const newPlayer = await response.json();
        return newPlayer.data;
    } catch (error) {
        console.error("Oops, something went wrong with adding that player!", error);
    }
}
