
export const userInfo = (token) => {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('Invalid JWT format');
    }

    const payload = parts[1];
    const decoded = JSON.parse(atob(payload));

    return {
      subject: decoded.sub,
      userId: decoded.userId
    };
  } catch (error) {
    console.error('Error getting user info:', error);
    throw new Error('Failed to get user info');
  }
};
