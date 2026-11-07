import { useAuth } from '../contexts/AuthContext';
import GuestHome from '../components/GuestHome';
import UserHome from '../components/UserHome';

export default function Home() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <UserHome /> : <GuestHome />;
}
