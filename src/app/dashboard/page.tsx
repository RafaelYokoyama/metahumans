"use client"
import React, { useContext } from 'react'
import { AuthContext, useAuth } from '@/contexts/AuthContext';


function Dashboard() {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Nome do usuário: {user?.password}</p>
    </div>
  );
}

export default Dashboard;
