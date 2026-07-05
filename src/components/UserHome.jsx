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
      <div class="row mt-3">
        <div class="col-12 col-md-10 col-lg-8 mx-auto mb-3 text-center text-primary bg-light">
          <p class="h3 pt-2">View Seasons</p>
          <p class="lead">
            View seasons which are currently in progress or have already finished.
          </p>
        </div>
        <div class="col-12 col-md-6">
          <a href="/viewSeasonList?view=usersSeasonsList" class="list-group-item list-group-item-action flex-column align-items-start full-height
            bg-dark text-white">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Your Seasons</h5>
            </div>
            <p class="mb-1">See the seasons which you are a part of.</p>
          </a>
        </div>
        <div class="col-12 col-md-6">
          <a href="/viewSeasonList?view=allSeasonsList" class="list-group-item list-group-item-action flex-column align-items-start h-100
            bg-light">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">All Seasons</h5>
            </div>
            <p class="mb-1">View seasons other competitors are participating in.</p>
          </a>
        </div>
      </div>
    </div>
  )
}
