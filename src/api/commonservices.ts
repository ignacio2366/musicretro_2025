
interface PropServices {
    method: "GET" | "POST" | "PUT" | "DELETE";
    url: string
}

export const commonservices = async (method: PropServices) => {

    try {
        const response = await fetch(method.url, {
            method: method.method,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.json();
    } catch (error) {
        console.error("Error in Musix services:", error);
    }
}