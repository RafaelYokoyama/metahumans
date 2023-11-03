import React, { useContext, useState } from 'react';
import CustomAvatar from '@/components/atoms/CustomAvatar/CustomAvatar';
import { AuthContext } from '@/contexts/AuthContext';
import { Box, Drawer, Stack, IconButton, Menu } from '@mui/material';

import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icon/Icon';
import Title from '@/components/atoms/Title/Title';

function DrawerMenu() {
  const [openDrawer, setOpenDrawer] = useState(true);
  const { user } = useContext(AuthContext);

  return (
    <>
      {
        !openDrawer &&
        <div
          className='relative flex ml-52 pt-4 cursor-pointer '
          onClick={() => setOpenDrawer(!openDrawer)}>
          <Icon name='ChevronLeftSquare' />
        </div>
      }
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={20}
          p={1}
          bgcolor="#000076"
          width="200px"
          height="100%"
        >
          <Stack alignItems="center" spacing={1} margin={3}>
            <CustomAvatar />
            <Title >{user?.username || 'Sem Nome'}</Title>
          </Stack>
          <Button icon='Orbit'>
            Cartas
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

export default DrawerMenu;
