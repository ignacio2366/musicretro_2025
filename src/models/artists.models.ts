export interface Artist {
    artist_id: number;
    artist_name: string;
    artist_country: string;
    artist_rating: number;
}

export interface ArtistsTypes {
    artists: Artist[];
}