
export const register = async (username, password, passwordVerify) => {
    const response = await fetch(`${import.meta.env.SGG_API_BASE_URL}/v1/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: username,
            password: password,
            passwordVerify: passwordVerify
        })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.errorMessage || "Failed to register.");
    }

    const data = await response.json();
    return data;
};
