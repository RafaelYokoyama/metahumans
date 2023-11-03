"use client"
import React, { useContext } from 'react'
import { AuthContext, useAuth } from '@/contexts/AuthContext';
import DrawerMenu from '@/components/organisms/DrawerMenu/DrawerMenu';

function Dashboard() {
  const { user } = useContext(AuthContext)

  return (
    <>
      <DrawerMenu />
    </>
  );
}

export default Dashboard;
