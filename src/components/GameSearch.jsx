import { useEffect, useRef, useState } from "react"
import { getPopularGames, searchGames } from "../services/Games"
import { useAuth } from "../contexts/AuthContext"

const MIN_CHARS = 2;
const DEBOUNCE_MS = 300;

const label = (g) => g.yearPublished ? `${g.name} (${g.yearPublished})` : g.name;

function GameOption({ game, showRank, onSelect }) {
    return (
        <button
            type="button"
            className="list-group-item list-group-item-action d-flex align-items-center gap-2"
            // mousedown fires before the input's blur, so the click isn't lost
            onMouseDown={(e) => { e.preventDefault(); onSelect(game); }}>
            {showRank && <span className="text-muted small" style={{ minWidth: "1.75rem" }}>#{game.rank}</span>}
            {game.thumbnail && (
                <img src={game.thumbnail} alt="" loading="lazy" width="40" height="30"
                    style={{ objectFit: "cover", borderRadius: 4 }} />
            )}
            <span className="flex-grow-1">{label(game)}</span>
        </button>
    );
}

export default function GameSearch({ value, onChange }) {
    const { token } = useAuth();
    const inputRef = useRef(null);

    const [query, setQuery] = useState("");
    const [popular, setPopular] = useState([]);
    const [popularLoading, setPopularLoading] = useState(true);
    const [popularError, setPopularError] = useState();
    const [results, setResults] = useState([]);
    const [open, setOpen] = useState(false);
    const [searching, setSearching] = useState(false);
    const [searchError, setSearchError] = useState();

    const isSearchMode = query.trim().length >= MIN_CHARS;

    // The input is only a search box, so validity depends on whether a game is selected
    useEffect(() => {
        inputRef.current?.setCustomValidity(value ? "" : "Please select a game.");
    }, [value]);

    // Load popular games once when the picker mounts (i.e. when the modal opens)
    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            try {
                setPopularLoading(true);
                setPopularError();
                setPopular(await getPopularGames(token, controller.signal));
            } catch (err) {
                if (err.name !== "AbortError") setPopularError(err.message);
            } finally {
                if (!controller.signal.aborted) setPopularLoading(false);
            }
        })();
        return () => controller.abort();
    }, [token]);

    // Debounced search with cancellation of stale requests
    useEffect(() => {
        if (!isSearchMode) {
            setResults([]);
            setSearching(false);
            setSearchError();
            return;
        }

        const controller = new AbortController();
        const timer = setTimeout(async () => {
            try {
                setSearching(true);
                setSearchError();
                setResults(await searchGames(query.trim(), token, controller.signal));
            } catch (err) {
                if (err.name !== "AbortError") {
                    setSearchError(err.message);
                    setResults([]);
                }
            } finally {
                if (!controller.signal.aborted) setSearching(false);
            }
        }, DEBOUNCE_MS);

        return () => {
            clearTimeout(timer);
            controller.abort();
        };
    }, [query, token, isSearchMode]);

    const handleSelect = (game) => {
        onChange(game);
        setQuery("");      // back to the "Search for a game…" placeholder
        setResults([]);
        setOpen(false);
        inputRef.current?.blur();
    };

    return (
        <div className="position-relative w-100 mb-3">
            <input
                ref={inputRef}
                type="text"
                className="form-control"
                id="season-game"
                placeholder="Search for a game…"
                autoComplete="off"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
                onFocus={() => setOpen(true)}
                onBlur={() => setOpen(false)}
            />
            <div className="invalid-feedback">Please search for and select a game.</div>

            {open && (
                <ul className="list-group position-absolute w-100 shadow"
                    style={{ zIndex: 1055, maxHeight: "280px", overflowY: "auto" }}>
                    {isSearchMode ? (
                        <>
                            {searching && (
                                <li className="list-group-item text-muted">
                                    <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                    Searching…
                                </li>
                            )}
                            {searchError && <li className="list-group-item text-danger">{searchError}</li>}
                            {!searching && !searchError && results.length === 0 && (
                                <li className="list-group-item text-muted">No games found.</li>
                            )}
                            {results.map((game) => (
                                <GameOption key={game.gameId} game={game} onSelect={handleSelect} />
                            ))}
                        </>
                    ) : (
                        <>
                            <li className="list-group-item bg-body-tertiary small text-uppercase fw-semibold text-muted">
                                Popular games
                            </li>
                            {popularLoading && (
                                <li className="list-group-item text-muted">
                                    <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                    Loading…
                                </li>
                            )}
                            {popularError && <li className="list-group-item text-danger">{popularError}</li>}
                            {popular.map((game) => (
                                <GameOption key={game.gameId} game={game} showRank onSelect={handleSelect} />
                            ))}
                        </>
                    )}
                </ul>
            )}
        </div>
    );
}