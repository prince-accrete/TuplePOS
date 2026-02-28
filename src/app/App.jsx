import { useState } from 'react';
import LoginScreen from '../auth/LoginScreen';
import POSScreen from '../pos';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return <POSScreen onLogout={handleLogout} />;
};

export default App;
