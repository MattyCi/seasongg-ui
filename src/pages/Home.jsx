import Carousel from "../components/Carousel";
import HomeLogo from "../components/HomeLogo";
import LoginInfo from "../components/LoginInfo";
import WelcomeInfo from "../components/WelcomeInfo";

export default function Home() {
  return (
    <div className="container">
      <HomeLogo />
      <Carousel />
      <WelcomeInfo />
      <LoginInfo />
    </div>
  )
}
