import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchSinglePlayer } from '../API/index.js';
import { Container, Typography, Card, CardContent, Button } from '@mui/material';

const SinglePlayer = ({ players, currentPlayerIndex, setCurrentPlayerIndex }) => {
    const { playerId } = useParams();
    const navigate = useNavigate();
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        const getPlayer = async () => {
            try {
                const playerData = await fetchSinglePlayer(playerId);
                setPlayer(playerData);
            } catch (error) {
                console.error("Failed to fetch player details.", error);
            }
        };
        getPlayer();
    }, [playerId]);

    if (!player) return <div>Loading...</div>;

    return (
        <Container>
            <Card sx={{ marginTop: 4, padding: 2 }}>
                <CardContent>
                    <Typography variant="h3">{player.name}</Typography>
                    <Typography>ID: {player.id}</Typography>
                    <Typography>Breed: {player.breed}</Typography>
                    <img src={player.imageUrl} alt={`Image of ${player.name}`} style={{ width: '100%', height: 'auto' }} />
                    <Typography>Team: {player.teamName || 'Unassigned'}</Typography>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/')}
                        sx={{ marginTop: 2 }}
                    >
                        Back to all players
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
};

export default SinglePlayer;
