import Carousel from "./Carousel";
import HomeLogo from "./HomeLogo";
import LoginInfo from "./LoginInfo";
import RegisterInfo from "./RegisterInfo";
import WelcomeInfo from "./WelcomeInfo";
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