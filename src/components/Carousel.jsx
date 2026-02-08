
export default function Carousel() {
  return (
    <div id="carouselExampleIndicators" class="row carousel slide season-gg-carousel-height season-gg-carousel-width bg-primary py-2 px-4 my-4 mx-lg-auto">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-item active">
            <div id="carousel-text-0" class="col-7 col-sm-6 pl-sm-5 text-white my-auto">
                <p class="season-gg-carousel-title-text font-weight-bold">Create a Season</p>
                <p class="season-gg-carousel-text">
                    Play your favorite game with your buddies and see who truly is the best.
                </p>
            </div>
            <div id="carousel-img-0" class="col-5 col-sm-6 text-center bg-primary my-auto">
                <img src="/src/assets/img/season-view-example.png" class="img-fluid season-gg-carousel-img-max-height" 
                    alt="Example of Season View Page" />
            </div> 
        </div>

        <div class="carousel-item">
            <div id="carousel-text-1" class="col-7 col-sm-6 pl-sm-5 text-white my-auto">
                <p class="season-gg-carousel-title-text font-weight-bold">Play Rounds</p>      
                <p class="season-gg-carousel-text">
                    Fight amongst your friends to get first place as often as possible.
                    The better you play each round, the better your rank becomes for the overall season.
                </p>
            </div>
            <div id="carousel-img-1" class="col-5 col-sm-6 text-center bg-primary pt-2 my-auto">
                <img src="/src/assets/img/create-round-example.png" class="img-fluid season-gg-carousel-img-max-height" 
                    alt="Example of Round Creation Process" />
            </div>
        </div>

        <div class="carousel-item">
            <div id="carousel-text-2" class="col-7 col-sm-6 pl-sm-5 text-white my-auto">
                <p class="season-gg-carousel-title-text font-weight-bold">Season Standings</p>
                <p class="season-gg-carousel-text">
                    After the season has ended, only the best will be named champion. Could it be you?
                </p>
            </div>
            <div id="carousel-img-2" class="col-5 col-sm-6 text-center bg-primary pt-2 my-auto">
                <img src="/src/assets/img/season-standings-example.png" class="img-fluid season-gg-carousel-img-max-height" 
                    alt="Example of Season Standings" />
            </div>
        </div>
    </div>
  )
}
