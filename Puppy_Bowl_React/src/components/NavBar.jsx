import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';

const NavBar = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    const goToNewPlayerForm = () => {
        navigate('/new-player');
    };

    return (
        <AppBar position="static" sx={{ height: '100px' }}>
            <Toolbar>
                <Button color="inherit" onClick={goToHome}>Home</Button>
                <Button color="inherit" onClick={goToNewPlayerForm}>Add Player</Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
