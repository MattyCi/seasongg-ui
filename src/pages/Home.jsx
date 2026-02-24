import Carousel from "../components/Carousel";
import HomeLogo from "../components/HomeLogo";
import LoginInfo from "../components/LoginInfo";
import RegisterInfo from "../components/RegisterInfo";
import WelcomeInfo from "../components/WelcomeInfo";
import useToken from "../services/useToken";

export default function Home() {
  const { token, setToken } = useToken();

  return (
    // TODO: display user home if token exists, otherwise show login/register
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
