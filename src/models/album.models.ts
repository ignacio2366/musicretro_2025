export interface Album {
    album_id: number;
    album_name: string;
    album_release_date: string;
    artist_id: number;
    artist_name: string;
    restricted: number;
    updated_time: string;
};

export interface AlbumTypes {
    albums: Album[];
};