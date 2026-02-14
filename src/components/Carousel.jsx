export default function Carousel() {
  return (
    <div className="row">
      <div id="sgg-carousel" className="carousel carousel-fade slide season-gg-carousel-height season-gg-carousel-width bg-primary py-2 px-4 my-4 mx-lg-auto" data-bs-ride="carousel" data-bs-pause="hover">
          <div className="carousel-indicators mb-1">
              <button type="button" data-bs-target="#sgg-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#sgg-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#sgg-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner h-100">
            <div className="carousel-item active h-100" data-bs-interval="7500">
                <div className="row align-items-center h-100">
                  <div id="carousel-text-0" className="col-7 col-sm-6 pl-sm-5 text-white">
                      <p className="season-gg-carousel-title-text fw-bold">Create a Season</p>
                      <p className="season-gg-carousel-text">
                          Play your favorite game with your buddies and see who truly is the best.
                      </p>
                  </div>
                  <div id="carousel-img-0" className="col-5 col-sm-6 text-center">
                      <img src="/src/assets/img/season-view-example.png" className="img-fluid season-gg-carousel-img-max-height" 
                          alt="Example of Season View Page" />
                  </div>
                </div>
            </div>

            <div className="carousel-item h-100" data-bs-interval="7500">
                <div className="row align-items-center h-100">
                  <div id="carousel-text-1" className="col-7 col-sm-6 pl-sm-5 text-white">
                      <p className="season-gg-carousel-title-text fw-bold">Play Rounds</p>
                      <p className="season-gg-carousel-text">
                          Fight amongst your friends to get first place as often as possible.
                          The better you play each round, the better your rank becomes for the overall season.
                      </p>
                  </div>
                  <div id="carousel-img-1" className="col-5 col-sm-6 text-center">
                      <img src="/src/assets/img/create-round-example.png" className="img-fluid season-gg-carousel-img-max-height" 
                          alt="Example of Round Creation Process" />
                  </div>
                </div>
            </div>

            <div className="carousel-item h-100" data-bs-interval="7500">
                <div className="row align-items-center h-100">
                  <div id="carousel-text-2" className="col-7 col-sm-6 pl-sm-5 text-white">
                      <p className="season-gg-carousel-title-text fw-bold">Season Standings</p>
                      <p className="season-gg-carousel-text">
                          After the season has ended, only the best will be named champion. Could it be you?
                      </p>
                  </div>
                  <div id="carousel-img-2" className="col-5 col-sm-6 text-center">
                      <img src="/src/assets/img/season-standings-example.png" className="img-fluid season-gg-carousel-img-max-height" 
                          alt="Example of Season Standings" />
                  </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}