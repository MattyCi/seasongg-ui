import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    if (!tokenString) {
      return null;
    }

    try {
      const decoded = jwtDecode(tokenString);
      const currentTime = Date.now() / 1000; // Convert to seconds
      
      if (decoded.exp < currentTime) {
        // TODO: handle refresh tokens
        console.warn("Token has expired.");
        sessionStorage.removeItem('token');
        return null;
      }
      
      return tokenString;
    } catch (error) {
      console.error("Invalid token:", error);
      sessionStorage.removeItem('token');
      return null;
    }
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('token', userToken);
    setToken(userToken);
  };

  const removeToken = () => {
    sessionStorage.removeItem('token');
    setToken(null);
  };

  return {
    setToken: saveToken,
    token,
    removeToken
  };
}