import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import missingGameImage from "../assets/img/missing-game-image.png";

const PAGE_SIZE = 2;

export default function SeasonList({ initialView = "mine", showToggle = true }) {
  const { token } = useAuth();

  const [view, setView] = useState(initialView);
  const [page, setPage] = useState(0);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    const params = new URLSearchParams({
      all: view === "all" ? "true" : "false",
      page: String(page),
      size: String(PAGE_SIZE),
    });

    const headers = {};
    if (view === "mine" && token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    fetch(`${import.meta.env.SGG_API_BASE_URL}/${import.meta.env.SGG_API_VERSION}/seasons?${params.toString()}`, { headers })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load seasons.`);
          console.error("Failed to load seasons:", res);
        }
        return res.json();
      })
      .then((body) => {
        if (cancelled) return;
          // page responses may omit "content" entirely when the page is empty
          const content = Array.isArray(body.content) ? body.content : [];
          setData({ ...body, content });
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [view, page, token]);

  const switchView = (nextView) => {
    setView(nextView);
    setPage(0);
  };

  const totalPages = data ? Math.max(data.totalPages, 1) : 1;

  return (
    <div>
      {showToggle && (
        <div className="btn-group mb-3" role="group">
          <button type="button" className={`btn btn-sm ${view === "mine" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => switchView("mine")} >
            Your Seasons
          </button>
          <button type="button" className={`btn btn-sm ${view === "all" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => switchView("all")} >
            All Seasons
          </button>
        </div>
      )}

      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {!loading && error && (
        <div className="alert alert-danger" role="alert">
          Failed to load seasons: {error}
        </div>
      )}

      {!loading && !error && data && data.content.length === 0 && (
        <div className="alert alert-secondary" role="alert">
          {view === "all"
            ? "No seasons have been created yet. Be the first to get one started!"
            : "You aren't part of any seasons yet. Go start one with your friends!"}
        </div>
      )}

      {!loading && !error && data && data.content.length > 0 && (
        <>
          <div className="row g-3 mb-3">
            {data.content.map((season) => (
              <div className="col-12 col-md-6" key={season.id}>
                <Link to={`/season/${season.id}`} className="card h-100 text-decoration-none text-body shadow-sm">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-2">
                      <div className="d-flex align-items-center gap-2">
                        <img src={season.game?.thumbnail || missingGameImage} alt="" width="36" height="36" className="rounded" style={{ objectFit: "cover" }} />
                        <div>
                          <div className="fw-bold">{season.name}</div>
                            <small className="text-muted">{season.game.name}</small>
                        </div>
                      </div>
                      <span className={`badge ${season.status === "ACTIVE" ? "bg-success" : "bg-secondary"}`}>
                        {season.status === "ACTIVE" ? "Active" : "Ended"}
                      </span>
                    </div>
                    <hr className="my-2" />
                    <div className="d-flex justify-content-between small text-muted">
                      <span>
                        {season.status === "ACTIVE" ? "Started" : "Ended"}{" "}
                        {formatDate(
                          season.status === "ACTIVE" ? season.startDate : season.endDate
                        )}
                      </span>
                      {Array.isArray(season.rounds) && (
                        <span>{season.rounds.length} rounds</span>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <small className="text-muted">
              Page {data.pageNumber + 1} of {totalPages}
            </small>
            <nav aria-label="Season list pagination">
              <ul className="pagination pagination-sm mb-0">
                <li className={`page-item ${page === 0 ? "disabled" : ""}`}>
                  <button className="page-link" onClick={() => setPage((p) => p - 1)} disabled={page === 0}>
                    Prev
                  </button>
                </li>
                <li className={`page-item ${page + 1 >= totalPages ? "disabled" : ""}`}>
                  <button className="page-link" onClick={() => setPage((p) => p + 1)} disabled={page + 1 >= totalPages}>
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

function formatDate(dateString) {
  if (!dateString) return "—";
  return new Date(dateString).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}