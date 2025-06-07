export class MusixServices {
    static async getTopMusixArtists() {
        const APIURL = `http://localhost:5000/api/home/whatnews`;
        try {
            const response = await fetch(APIURL, {
                method: "GET",
            })
            return response.json();
        } catch (error) {
            console.error("Error fetching top artists:", error);
            throw error;
        }
    }
}
