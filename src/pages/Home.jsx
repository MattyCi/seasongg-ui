import Carousel from "../components/Carousel";
import HomeLogo from "../components/HomeLogo";
import LoginInfo from "../components/LoginInfo";
import RegisterInfo from "../components/RegisterInfo";
import WelcomeInfo from "../components/WelcomeInfo";

export default function Home() {
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
