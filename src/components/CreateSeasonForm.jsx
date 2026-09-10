import { useState } from "react"
import { createSeason } from "../services/Seasons"
import { useAuth } from "../contexts/AuthContext"

export default function CreateSeasonForm({ show, onClose, onCreated }) {
    const { token } = useAuth();

    const [name, setName] = useState("");
    const [gameId, setGameId] = useState("");
    const [endDate, setEndDate] = useState("");
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [validated, setValidated] = useState(false);

    if (!show) {
        return null;
    }

    const resetForm = () => {
        setName("");
        setGameId("");
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
            const season = await createSeason(name, endDate, gameId, token);
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
                                    <input name="name" type="text" className="form-control mb-3" id="season-name" placeholder="e.g. Dominion Winter 2026" autoComplete="off"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        minLength="3"
                                        maxLength="64" />
                                    <div className="invalid-feedback">Season name must be 3-64 characters.</div>
                                </div>

                                <div className="input-group has-validation">
                                    {/* TODO: swap for a real game search/picker component once the games endpoint is wired up */}
                                    <select name="gameId" className="form-select mb-3" id="season-game"
                                        value={gameId}
                                        onChange={(e) => setGameId(e.target.value)}
                                        required>
                                        <option value="" disabled>Select a game&hellip;</option>
                                        <option value="13">Dominion</option>
                                        <option value="27">Wingspan</option>
                                    </select>
                                    <div className="invalid-feedback">Please select a game.</div>
                                </div>

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
                                <button type="submit" className="btn btn-primary" disabled={loading}>
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