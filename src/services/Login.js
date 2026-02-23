
export const login = async (username, password) => {
    const response = await fetch(`${import.meta.env.SGG_API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to log in.");
    }

    const data = await response.json();
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);
    return data;
};
