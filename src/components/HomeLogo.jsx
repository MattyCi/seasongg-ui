
export default function HomeLogo() {
  return (
    <div className="row">
        <div className="d-md-none mt-3">	
            <div className="col">
                <img className="logo-img" src="src/assets/img/logo.png" alt="logo" />
            </div>
        </div>

        <div className="mt-3 d-none d-md-block">	
            <div className="col text-center">
                <h1 className="display-4">
                    <span className="text-success fw-bold">Season GG</span>
                    <small className="text-secondary"> take board game rivalry to the next level.</small>
                </h1>
            </div>
        </div>
    </div>
  )
}
