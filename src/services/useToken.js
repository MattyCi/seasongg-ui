
import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const token = sessionStorage.getItem('access_token');
    if (!token) {
      return null;
    }
    return token;
  };

  const [token, setTokenState] = useState(getToken());

  const setToken = (newToken) => {
    if (newToken) {
      sessionStorage.setItem('access_token', newToken);
    } else {
      sessionStorage.removeItem('access_token');
    }
    setTokenState(newToken);
  };

  return [token, setToken];
}