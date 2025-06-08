export interface Track {
  track_id: number;
  track_name: string;
  commontrack_id: number;
  album_id: number;
  album_name: string;
  artist_id: number;
  artist_name: string;
}

export interface TrackListModel {
  track_list: Track[];
}
