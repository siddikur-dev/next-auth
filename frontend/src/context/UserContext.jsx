import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  // Temporary user - In production, this would come from auth
  const [user] = useState({
    _id: '67850d5dac8c0a5e21234567',
    name: 'John Doe',
    email: 'john@example.com',
  });

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};