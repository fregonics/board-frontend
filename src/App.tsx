import React, { useState } from 'react';
import Routes from './Routes';

interface User {
  id: number;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

function App() {
  const [user, setUser] = useState<User>()

  return (
    <Routes />
  );
}

export default App;
