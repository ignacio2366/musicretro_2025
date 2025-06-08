import { Request, Response } from "express";

export const getTopArtist = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const response = await fetch(
      `https://api.musixmatch.com/ws/1.1/chart.artists.get?apikey=8e343bd24865f49e56ffb12348bb9ccf&country=PH&format=json&page_size=5&page=1`,
      { method: "GET" }
    );

    if (!response.ok) {
      return res.status(500).json({ error: "Musixmatch API error" });
    }

    const result = await response.json();
    const artists = result.message.body.artist_list.map((item: any) => ({
      artist_id: item.artist.artist_id,
      artist_name: item.artist.artist_name,
      artist_country: item.artist.artist_country,
      artist_rating: item.artist.artist_rating,
    }));

    res.status(200).json({ artists });
  } catch (err) {
    console.error("Error fetching Musixmatch data:", err);
    res.status(500).json({ error: "Failed to fetch data from Musixmatch" });
  }
};
export const LatestAlbums = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const artist_id = Number(req.params["artistId"]);

    const response = await fetch(
      `https://api.musixmatch.com/ws/1.1/artist.albums.get?apikey=8e343bd24865f49e56ffb12348bb9ccf&artist_id=${artist_id}&s_release_date=asc&page_size=3`,
      { method: "GET" }
    );

    const result = await response.json();
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
      return res.status(500).json({ error: "Musixmatch API error" });
    }
  } catch (err) {
    console.error("Error fetching Musixmatch data:", err);
    res.status(500).json({ error: "Failed to fetch data from Musixmatch" });
  }
};

export const getTrackList = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const album_id = Number(req.params["albumId"]);

    const response = await fetch(
      `https://api.musixmatch.com/ws/1.1/album.tracks.get?apikey=8e343bd24865f49e56ffb12348bb9ccf&album_id=${album_id}&page=1&page_size=3`,
      { method: "GET" }
    );

    const result = await response.json();
    const track_list = result.message.body.track_list.map((item: any) => ({
      track_id: item.track.track_id,
      track_name: item.track.track_name,
      commontrack_id: item.track.commontrack_id,
      album_id: item.track.album_id,
      album_name: item.track.album_name,
      artist_id: item.track.artist_id,
      artist_name: item.track.artist_name,
    }));
    res.status(200).json({ track_list });

    if (!response.ok) {
      return res.status(500).json({ error: "Musixmatch API error" });
    }
  } catch (err) {
    console.error("Error fetching Musixmatch data:", err);
    res.status(500).json({ error: "Failed to fetch data from Musixmatch" });
  }
};

export const getLyrics = async (req: Request, res: Response): Promise<any> => {
  try {
    const trackId = Number(req.params["trackId"]);
    const response = await fetch(
      `https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=8e343bd24865f49e56ffb12348bb9ccf&commontrack_id=${trackId}`,
      { method: "GET" }
    );
    const filterLtrics = (lyrics: string) => {
      return lyrics.replace(/\n/g, " ");
    };
    const result = await response.json();
    const lyrics = result.message.body.lyrics;
    const lyric = {
      lyrics_id: lyrics.lyrics_id,
      explicit: lyrics.explicit,
      lyrics_body: filterLtrics(lyrics.lyrics_body),
      lyrics_copyright: lyrics.lyrics_copyright,
    };
    res.status(200).json({ lyric });

    if (!response.ok) {
      return res.status(500).json({ error: "Musixmatch API error" });
    }
  } catch (err) {
    console.error("Error fetching Musixmatch data:", err);
    res.status(500).json({ error: "Failed to fetch data from Musixmatch" });
  }
};
