import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Character({character}) {
  return (
    <Card sx={{ width: 250,height : 300 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {character.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Status : {character.status}
        </Typography>
        <Typography variant="body1" color="text.secondary">Gender : {character.gender}</Typography>
        <Typography variant="body1" color="text.secondary">Species : {character.species}</Typography>
      </CardContent>
    </Card>

  );
}
