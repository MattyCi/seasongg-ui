import Carousel from "../components/Carousel";
import HomeLogo from "../components/HomeLogo";
import LoginInfo from "../components/LoginInfo";
import RegisterInfo from "../components/RegisterInfo";
import WelcomeInfo from "../components/WelcomeInfo";
import { useAuth } from '../contexts/AuthContext';

export default function Home() { 
  const { isAuthenticated } = useAuth();
  return (
    // TODO: display user home if token exists, otherwise show login/register
    <div className="container">
      <h1>isAuthenticated : {String(isAuthenticated)}</h1>
      {isAuthenticated ? <p>logged in!</p> : <p>logged out...</p>}
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
