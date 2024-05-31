import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PlayerCard = ({ player }) => {
    return (
        <Card sx={{ width: 200, height: 150, margin: 1 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {player.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ID: {player.id}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PlayerCard;
