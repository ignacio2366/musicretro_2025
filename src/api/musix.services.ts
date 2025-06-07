export class MusixServices {
    static async getTopMusixArtists() {
        const APIURL = `http://localhost:8080/api/musixmatch/top-artist`;
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
    static async getTopAlbums(albumId: number) {
        const APIURL = `http://localhost:8080/api/musixmatch/latest-album/${albumId}`;
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
