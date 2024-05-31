import React, { useEffect, useState } from "react";
import { fetchAllPlayers } from '../API/index.js';
import { useNavigate } from "react-router-dom";
import { Button, Grid, Container } from "@mui/material";
import PlayerCard from './PlayerCard';

const AllPlayers = ({ setPlayers, setCurrentPlayerIndex }) => {
    const [players, setLocalPlayers] = useState([]);
    const [page, setPage] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const getPlayers = async () => {
            try {
                const newPlayers = await fetchAllPlayers(page);
                setLocalPlayers(prevPlayers => [...prevPlayers, ...newPlayers]);
                setPlayers(prevPlayers => [...prevPlayers, ...newPlayers]);
            } catch (error) {
                console.error("Failed to fetch players.", error);
            }
        };
        getPlayers();
    }, [page, setPlayers]);

    const handleCardClick = (playerId) => {
        const index = players.findIndex(player => player.id === playerId);
        setCurrentPlayerIndex(index);
        navigate(`/players/${playerId}`);
    };

    const getMorePlayers = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <Container>
            <h1>Player List</h1>
            <Grid container spacing={2} justifyContent="center">
                {players.map((player, index) => (
                    <Grid item key={player.id || index} xs={2.4}>
                        <div onClick={() => handleCardClick(player.id)} style={{ cursor: 'pointer' }}>
                            <PlayerCard player={player} />
                        </div>
                    </Grid>
                ))}
            </Grid>
            <Grid container justifyContent="center">
                <Button
                    variant="contained"
                    onClick={getMorePlayers}
                    sx={{ marginTop: 2 }}
                >
                    Load More Players
                </Button>
            </Grid>
        </Container>
    );
};

export default AllPlayers;

