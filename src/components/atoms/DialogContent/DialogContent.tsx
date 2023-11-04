import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Icon from '@/components/atoms/Icon/Icon';
import { Heroes } from '@/types/heroes';
import { calculateTotalPower } from '@/utils/calculateTotalPower';

type IDialogContentProps = {
  selectedHeroes: Heroes[];
  winner: string | null;
};

function DialogContentComponent({ selectedHeroes, winner }: IDialogContentProps) {
  return (
    <Box display="flex" justifyContent="space-between">
      {selectedHeroes.map((hero) => (
        <Card key={hero.id} style={{ maxWidth: 345, margin: '0.5rem' }}>
          <CardMedia
            component="img"
            height="140"
            image={hero.images.lg}
            alt={hero.name}
            style={{ filter: winner && hero.name !== winner ? 'grayscale(100%)' : 'none' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {hero.name}
            </Typography>
            <Box className='flex items-center  gap-1'>
              <Icon name="SwordsIcon" />
              <Typography variant="body2" color="text.secondary">
                Poder: {calculateTotalPower(hero.powerstats)}
              </Typography>
            </Box>
            {winner && hero.name === winner && <Typography style={{ color: 'green' }}>Vencedor</Typography>}
            {winner && hero.name !== winner && <Typography style={{ color: 'red' }}>Perdedor</Typography>}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default DialogContentComponent;
