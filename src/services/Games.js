const baseUrl = () => `${import.meta.env.SGG_API_BASE_URL}/${import.meta.env.SGG_API_VERSION}/games`;

export const getGame = async (gameId, token, signal) => {
    const response = await fetch(`${baseUrl()}/${gameId}`, {
        headers: { Authorization: `Bearer ${token}` },
        signal
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.errorMessage || "Failed to load game details.");
    }

    return response.json();
};

export const getPopularGames = async (token, signal) => {
    const response = await fetch(`${baseUrl()}/popular`, {
        headers: { Authorization: `Bearer ${token}` },
        signal
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.errorMessage || "Failed to load popular games.");
    }

    return response.json(); // [{ gameId, name, rank, thumbnail?, yearPublished? }]
};

export const searchGames = async (query, token, signal) => {
    const response = await fetch(`${baseUrl()}/search?query=${encodeURIComponent(query)}`, {
        headers: { Authorization: `Bearer ${token}` },
        signal
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.errorMessage || "Failed to search games.");
    }

    return response.json(); // [{ gameId, name, yearPublished? }]
};