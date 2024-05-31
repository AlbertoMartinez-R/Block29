import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { addNewPlayer, fetchAllPlayers } from '../API/index.js';

const NewPlayerForm = ({ setPlayers }) => {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPlayer = {
            name,
            breed,
        };

        try {
            const addedPlayer = await addNewPlayer(newPlayer);
            if (addedPlayer) {
                const updatedPlayers = await fetchAllPlayers();
                setPlayers(updatedPlayers);
                setName('');
                setBreed('');
            } else {
                console.error('Failed to create new player.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">Create New Player</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Breed"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                />
                <Button type="submit" fullWidth variant="contained" color="primary">
                    Add Player
                </Button>
            </form>
        </Container>
    );
};

export default NewPlayerForm;
