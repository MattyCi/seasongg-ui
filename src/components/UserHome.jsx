
import SeasonList from "./SeasonList";
import { useAuth } from '../contexts/AuthContext';

export default function Home() {
  const { isAuthenticated } = useAuth();
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-12">
          <SeasonList initialView="mine" />
        </div>
      </div>
    </div>
  )
}