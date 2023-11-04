import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Input from '@/components/atoms/Input/Input';

type IHeaderProps = {
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Header({ searchTerm, handleSearchChange }: IHeaderProps) {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 7 }}>
      <AppBar
        position="fixed"
        sx={{
          background: 'rgb(10 20 80 / 74%)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              fontWeight: 600,
              fontStyle: 'italic',
            }}
          >
            Hero 🦸
          </Typography>
          <Input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className='bg-white text-black'
            placeholder="Nome do Herói 🦸🏿‍♂️ "
            icon
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
