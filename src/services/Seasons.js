
export const createSeason = async ({ name, endDate, game }, token) => {
    const localDate = new Date(`${endDate}T00:00:00`);
    const response = await fetch(`${import.meta.env.SGG_API_BASE_URL}/${import.meta.env.SGG_API_VERSION}/seasons`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            name: name,
            endDate: localDate,
            game: {
                gameId: Number(game.gameId),
                name: game.name
            }
        })
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.errorMessage || "Failed to create season.");
    }

    return response.json();
};