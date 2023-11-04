// CustomModal.tsx
import React from 'react';
import { Dialog, DialogActions, Button } from '@mui/material';

import { Heroes } from '@/types/heroes';
import DialogTitleComponent from '@/components/atoms/DialogTitle/DialogTitle';
import DialogContentComponent from '@/components/atoms/DialogContent/DialogContent';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedHeroes: Heroes[];
  winner: string | null;
};

function CustomModal({ isOpen, onClose, selectedHeroes, winner }: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitleComponent selectedHeroes={selectedHeroes} winner={winner} />
      <DialogContentComponent selectedHeroes={selectedHeroes} winner={winner} />
      <DialogActions>
        <Button onClick={onClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CustomModal;
