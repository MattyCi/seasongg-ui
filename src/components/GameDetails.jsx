export default function GameDetails({ game, loading, error, onClear }) {
    if (!game) return null;

    return (
        <div className="card border-success mb-3">
            <div className="card-header bg-success-subtle d-flex justify-content-between align-items-center py-2">
                <span className="fw-semibold text-success-emphasis">Game selected:</span>
                {onClear && (
                    <button type="button" className="btn btn-sm btn-link text-decoration-none p-0" onClick={onClear}>
                        Remove
                    </button>
                )}
            </div>
            <div className="card-body d-flex align-items-center gap-3 py-2">
                {game.thumbnail && (
                    <img src={game.thumbnail} alt="" width="80" className="rounded"
                        style={{ objectFit: "cover" }} />
                )}
                <div className="flex-grow-1">
                    <div className="fw-semibold">{game.name}</div>
                    {game.yearPublished && <div className="small text-muted">Published {game.yearPublished}</div>}

                    {loading && (
                        <div className="small text-muted mt-1">
                            <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                            Loading details…
                        </div>
                    )}
                    {error && <div className="small text-danger mt-1">{error}</div>}
                </div>
            </div>
        </div>
    );
}