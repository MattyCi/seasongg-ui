import Carousel from "./Carousel";
import HomeLogo from "./HomeLogo";
import LoginInfo from "./LoginInfo";
import RegisterInfo from "./RegisterInfo";
import WelcomeInfo from "./WelcomeInfo";
import { useAuth } from '../contexts/AuthContext';

export default function Home() { 
  const { isAuthenticated } = useAuth();
  return (
    <div className="container">
      <HomeLogo />
      <Carousel />
      <WelcomeInfo />
      <div className="row my-3 justify-content-around">
        <LoginInfo />
        <RegisterInfo />
      </div>
    </div>
  )
}
