import Carousel from "../components/Carousel";
import HomeLogo from "../components/HomeLogo";

export default function Home() {
  return (
    <div className="container">
      <HomeLogo />
      <Carousel />
      <div className="row my-4">
        <h1>Home</h1>
        <p>Welcome to the SeasonGG UI starter with React + Bootstrap + Router.</p>
      </div>
    </div>
  )
}
