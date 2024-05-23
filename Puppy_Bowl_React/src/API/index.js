const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-MT-WEB-PT`;

const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${API_URL}/players/`);
        const result = await response.json();
        return result.data.players; 
    } catch (err) {
        console.log("There are no players");
        throw err;
    }
}

export { fetchAllPlayers }; 
