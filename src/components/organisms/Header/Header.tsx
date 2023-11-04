import React, { useContext } from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Input from '@/components/atoms/Input/Input';
import { AuthContext } from '@/contexts/AuthContext';
import CustomAvatar from '@/components/atoms/CustomAvatar/CustomAvatar';
import Title from '@/components/atoms/Title/Title';

type IHeaderProps = {
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Header({ searchTerm, handleSearchChange }: IHeaderProps) {
  const { user } = useContext(AuthContext);

  const renderLoggedInHeader = () => (
    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
      <div className='flex items-center gap-3'>
        <CustomAvatar size={30} />
        <Title>{user?.username || 'Sem Nome'}</Title>
      </div>
    </Typography>
  );

  const renderLoggedOutHeader = () => (
    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
      Hero 🦸
    </Typography>
  );

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 7 }}>
      <AppBar position="fixed" sx={{ background: 'rgb(10 20 80 / 74%)', backdropFilter: 'blur(20px)' }}>
        <Toolbar>
          {user ? renderLoggedInHeader() : renderLoggedOutHeader()}
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
