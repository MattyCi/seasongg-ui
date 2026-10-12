import { useEffect, useState } from "react"
import { createSeason } from "../services/Seasons"
import { getGame } from "../services/Games"
import { useAuth } from "../contexts/AuthContext"
import GameSearch from "./GameSearch"
import GameDetails from "./GameDetails"

export default function CreateSeasonForm({ show, onClose, onCreated }) {
    const { token } = useAuth();

    const [name, setName] = useState("");
    const [game, setGame] = useState(null);
    const [gameDetails, setGameDetails] = useState(null);
    const [detailsLoading, setDetailsLoading] = useState(false);
    const [detailsError, setDetailsError] = useState();
    const [endDate, setEndDate] = useState("");
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [validated, setValidated] = useState(false);

    // Fetch full details whenever a game is selected
    useEffect(() => {
        setGameDetails(null);
        setDetailsError();

        if (!game) {
            setDetailsLoading(false);
            return;
        }

        const controller = new AbortController();
        (async () => {
            try {
                setDetailsLoading(true);
                setGameDetails(await getGame(game.gameId, token, controller.signal));
            } catch (err) {
                if (err.name !== "AbortError") {
                    setDetailsError("Couldn't load full details, but you can still use this game.");
                }
            } finally {
                if (!controller.signal.aborted) setDetailsLoading(false);
            }
        })();

        return () => controller.abort();
    }, [game?.gameId, token]);

    if (!show) {
        return null;
    }

    // Details from the game endpoint override the basic search/popular data
    const selectedGame = game ? { ...game, ...gameDetails } : null;

    const resetForm = () => {
        setName("");
        setGame(null);
        setEndDate("");
        setValidated(false);
        setError();
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        setError();

        setValidated(true);

        const form = e.currentTarget;
        if (!form.checkValidity()) {
            return;
        }

        try {
            setLoading(true);
            const season = await createSeason(name, endDate, selectedGame, token);
            resetForm();
            onCreated(season);
        } catch (error) {
            setError(error.message || "Failed to create season. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="modal d-block" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <form id="createSeasonForm" className={validated ? "was-validated" : "needs-validation"} onSubmit={handleCreate} noValidate>
                            <div className="modal-header">
                                <h5 className="modal-title">Create a season</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                            </div>
                            <div className="modal-body">
                                {error && <div className="alert alert-danger py-2" role="alert">{error}</div>}

                                <div className="input-group has-validation">
                                    <input name="name" type="text" className="form-control mb-3" id="season-name" placeholder="Season Name" autoComplete="off"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        minLength="3"
                                        maxLength="64" />
                                    <div className="invalid-feedback">Season name must be 3-64 characters.</div>
                                </div>

                                <div className="input-group has-validation">
                                    <GameSearch value={game} onChange={setGame} />
                                </div>

                                <GameDetails game={selectedGame} loading={detailsLoading} error={detailsError} onClear={() => setGame(null)} />

                                <div className="input-group has-validation">
                                    <input name="endDate" type="date" className="form-control mb-3" id="season-end-date"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        required />
                                    <div className="invalid-feedback">End date is required.</div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" onClick={handleClose}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary" disabled={loading || detailsLoading}>
                                    {loading ? <div className="spinner-border spinner-border-sm" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div> : "Create season"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop show"></div>
        </>
    )
}