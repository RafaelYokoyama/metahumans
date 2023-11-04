import React from 'react';
import { DialogTitle } from '@mui/material';
import { Heroes } from '@/types/heroes';

type IDialogTitleProps = {
  selectedHeroes: Heroes[];
  winner: string | null;
};

function DialogTitleComponent({ selectedHeroes, winner }: IDialogTitleProps) {
  return (
    <DialogTitle>
      <span>Batalha entre </span>
      <span style={{ color: winner ? 'green' : 'inherit' }}>{selectedHeroes[0]?.name}</span> vs{' '}
      <span style={{ color: winner ? 'red' : 'inherit' }}>{selectedHeroes[1]?.name}</span>
    </DialogTitle>
  );
}

export default DialogTitleComponent;
