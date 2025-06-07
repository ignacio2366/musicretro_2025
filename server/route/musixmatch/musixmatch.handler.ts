import { Request, Response } from "express";

export const getTopArtist = async (req: Request, res: Response): Promise<any> => {
    try {
        const response = await fetch(
            `https://api.musixmatch.com/ws/1.1/chart.artists.get?apikey=8e343bd24865f49e56ffb12348bb9ccf&country=PH&format=json&page_size=5&page=1`,
            { method: 'GET' }
        );

        if (!response.ok) {
            return res.status(500).json({ error: 'Musixmatch API error' });
        }

        const result = await response.json();
        const artists = result.message.body.artist_list.map((item: any) => ({
            artist_id: item.artist.artist_id,
            artist_name: item.artist.artist_name,
            artist_country: item.artist.artist_country,
            artist_rating: item.artist.artist_rating
        }));

        res.status(200).json({ artists });

    } catch (err) {
        console.error('Error fetching Musixmatch data:', err);
        res.status(500).json({ error: 'Failed to fetch data from Musixmatch' });
    }

}
export const LatestAlbums = async (req: Request, res: Response): Promise<any> => {
    try {
        const artist_id = Number(req.params["artistId"])

        const response = await fetch(
            `https://api.musixmatch.com/ws/1.1/artist.albums.get?apikey=8e343bd24865f49e56ffb12348bb9ccf&artist_id=${artist_id}&s_release_date=asc&page_size=3`,
            { method: 'GET' }
        );

        const result = await response.json()
        const albums = result.message.body.album_list.map((item: any) => ({
            album_id: item.album.album_id,
            album_name: item.album.album_name,
            album_release_date: item.album.album_release_date,
            artist_id: item.album.artist_id,
            artist_name: item.album.artist_name,
            restricted: item.album.restricted,
            updated_time: item.album.updated_time,
        }));
        res.status(200).json({ albums });

        if (!response.ok) {
            return res.status(500).json({ error: 'Musixmatch API error' });
        }

    } catch (err) {
        console.error('Error fetching Musixmatch data:', err);
        res.status(500).json({ error: 'Failed to fetch data from Musixmatch' });
    }
}