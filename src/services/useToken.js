
import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const token = sessionStorage.getItem('access_token');
    if (!token) {
      return null;
    }
    return token;
  };

  const [token, setToken] = useState(getToken());

    return {
    token
  }
}