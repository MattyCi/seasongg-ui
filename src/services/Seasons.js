
export const createSeason = async (name, endDate, gameId, token) => {
    const response = await fetch(`${import.meta.env.SGG_API_BASE_URL}/${import.meta.env.SGG_API_VERSION}/seasons`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            name: name,
            endDate: endDate,
            game: { gameId: Number(gameId) }
        })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.errorMessage || "Failed to create season.");
    }

    const data = await response.json();
    return data;
};